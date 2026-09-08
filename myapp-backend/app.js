const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const pool = require('./db-connection');

const app = express();
const PORT = 3300;
const mediaDirectory = path.join(__dirname, 'media');

fs.mkdirSync(mediaDirectory, { recursive: true });

app.use(express.json({ limit: '10mb' }));
app.use('/media', express.static(mediaDirectory));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    next();
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/create-note', async (req, res) => {
    const { name, message, img, doodle } = req.body;
    let client;
    let imagePath;

    try {
        if (img?.startsWith('data:image/png;base64,')) {
            const imageName = `${crypto.randomUUID()}.png`;
            const imageBuffer = Buffer.from(img.replace('data:image/png;base64,', ''), 'base64');
            fs.writeFileSync(path.join(mediaDirectory, imageName), imageBuffer);
            imagePath = `/media/${imageName}`;
        } else if (doodle) {
            imagePath = doodle;
        }

        client = await pool.connect();
        await client.query('BEGIN');

        const noteResult = await client.query(
            `INSERT INTO note (name, message, doodle)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [name?.trim() || 'anonymous', message?.trim() || null, imagePath || null]
        );

        const note = noteResult.rows[0];
        await client.query(
            'INSERT INTO board (note_id) VALUES ($1)',
            [note.id]
        );

        await client.query('COMMIT');
        res.status(201).json(note);
    } catch (error) {
        if (client) {
            await client.query('ROLLBACK');
        }
        console.error('Failed to create note:', error);
        res.status(500).json({ error: 'Failed to create note' });
    } finally {
        client?.release();
    }
});

app.get('/board', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT n.*
             FROM board b
             JOIN note n ON n.id = b.note_id
             ORDER BY n.createdat DESC, n.id DESC`
        );

        res.json(result.rows);
    } catch (error) {
        console.error('Failed to fetch board:', error);
        res.status(500).json({ error: 'Failed to fetch board' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
