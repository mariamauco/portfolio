import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer';
import { VisitorCard } from '../Cards';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, Container, IconButton, Slider, Stack, TextField, Tooltip, Typography } from '@mui/material';

const brushColors = ['#39542D', '#252F27', '#C95D63', '#4B75A8', '#D18B32'];
const apiUrl = 'http://localhost:3300';
const cooldownCookie = 'visitor_note_cooldown';
const cooldownDuration = 24 * 60 * 60 * 1000;

const hasCooldown = () => {
  const expiry = Number(document.cookie.split('; ').find((cookie) => cookie.startsWith(`${cooldownCookie}=`))?.split('=')[1]);
  return expiry > Date.now();
};

export default function Visitors() {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const historyRef = useRef([]);
  const [brushWidth, setBrushWidth] = useState(3);
  const [brushColor, setBrushColor] = useState(brushColors[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/board`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch visitor notes');
        return response.json();
      })
      .then(setVisitors)
      .catch(() => setVisitors([]));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const scale = window.devicePixelRatio || 1;
    const bounds = canvas.getBoundingClientRect();

    canvas.width = bounds.width * scale;
    canvas.height = bounds.height * scale;
    context.scale(scale, scale);
    context.lineCap = 'round';
    context.lineJoin = 'round';
  }, []);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;

    context.lineWidth = brushWidth;
    context.strokeStyle = brushColor;
    context.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
  }, [brushColor, brushWidth, isErasing]);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    historyRef.current = [...historyRef.current.slice(-19), context.getImageData(0, 0, canvas.width, canvas.height)];
    setCanUndo(true);
  };

  const getCanvasPoint = (event) => {
    const bounds = canvasRef.current.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };

  const handlePointerDown = (event) => {
    const canvas = canvasRef.current;
    const point = getCanvasPoint(event);
    const context = canvas.getContext('2d');

    saveCanvasState();
    drawingRef.current = true;
    canvas.setPointerCapture(event.pointerId);
    context.lineWidth = brushWidth;
    context.strokeStyle = brushColor;
    context.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const handlePointerMove = (event) => {
    if (!drawingRef.current) return;

    const point = getCanvasPoint(event);
    const context = canvasRef.current.getContext('2d');
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const handlePointerUp = () => {
    drawingRef.current = false;
  };

  const handleUndo = () => {
    const previousState = historyRef.current.pop();
    if (!previousState) return;

    canvasRef.current.getContext('2d').putImageData(previousState, 0, 0);
    setCanUndo(historyRef.current.length > 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting || hasCooldown()) {
      setSubmitMessage('You can leave another note in 24 hours.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const canvas = canvasRef.current;
    setIsSubmitting(true);
    setSubmitMessage('');

    fetch(`${apiUrl}/create-note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        message: formData.get('message'),
        img: canvas.toDataURL('image/png'),
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Note submission failed');
        return response.json();
      })
      .then(() => {
        document.cookie = `${cooldownCookie}=${Date.now() + cooldownDuration}; max-age=${cooldownDuration / 1000}; path=/; SameSite=Lax`;
        setSubmitMessage('Thank you! Your note is pending review.');
        form.reset();
      })
      .catch(() => {
        setSubmitMessage('Unable to submit your note. Please try again.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
        <Typography component="h1" sx={{ px: 1, mb: 2, fontFamily: 'Fira Code, monospace', fontSize: { xs: 26, md: 32 }, fontWeight: 400 }}>
          Leave a <Box component="span" sx={{ fontWeight: 700 }}>note</Box>!
        </Typography>

        <Box sx={{ p: { xs: 1.5, md: 2 }, borderRadius: 0, backgroundColor: 'rgba(247, 233, 250, 0.42)' }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', gap: { xs: 2, md: 3 }, p: { xs: 1.5, md: 2 }, borderRadius: 2.5, backgroundColor: '#D2E6B7' }}>
            <Stack spacing={1.5} sx={{ flex: '1 1 55%', minWidth: 0 }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 0.5 }}>
                <Typography sx={{ minWidth: 42, color: '#39542D', fontSize: 12 }}>width</Typography>
                <Slider aria-label="Brush width" min={1} max={50} value={brushWidth} onChange={(_, value) => setBrushWidth(value)} size="small" sx={{ color: '#39542D' }} />
                <Typography sx={{ minWidth: 24, textAlign: 'right', color: '#39542D', fontSize: 12 }}>{brushWidth}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 0.5 }}>
                <Typography sx={{ minWidth: 42, color: '#39542D', fontSize: 12 }}>color</Typography>
                {brushColors.map((color) => (
                  <IconButton
                    key={color}
                    aria-label={`Use ${color} brush`}
                    onClick={() => { setBrushColor(color); setIsErasing(false); }}
                    size="small"
                    sx={{ width: 24, height: 24, border: brushColor === color && !isErasing ? '2px solid #252F27' : '1px solid rgba(37, 47, 39, 0.3)', backgroundColor: color, '&:hover': { backgroundColor: color, opacity: 0.8 } }}
                  />
                ))}
                <Tooltip title={isErasing ? 'Use brush' : 'Eraser'}>
                  <IconButton aria-label={isErasing ? 'Use brush' : 'Eraser'} onClick={() => setIsErasing((current) => !current)} size="small" sx={{ border: isErasing ? '2px solid #252F27' : '1px solid rgba(37, 47, 39, 0.3)' }}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Undo last stroke">
                  <span>
                    <IconButton aria-label="Undo last stroke" onClick={handleUndo} disabled={!canUndo} size="small">
                      <UndoIcon fontSize="small" />
                    </IconButton>
                  </span>
                </Tooltip>
              </Stack>
              <Box component="canvas" ref={canvasRef} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} sx={{ width: '100%', height: { xs: 260, md: 326 }, display: 'block', minWidth: 0, cursor: isErasing ? 'cell' : 'crosshair', touchAction: 'none', backgroundColor: '#fff', border: '1px solid #CFC0D4', boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)' }} />
            </Stack>

            <Stack spacing={1} sx={{ flex: '1 1 45%', justifyContent: 'center', p: { xs: 0, md: 1 } }}>
              <Typography sx={{ mb: 1, textAlign: 'center', color: '#39542D', fontFamily: 'Fira Code, monospace', fontSize: 14 }}>have something to share before you go?</Typography>
              <TextField name="name" placeholder="Name (optional)" variant="filled" hiddenLabel fullWidth />
              <TextField name="message" placeholder="Message (max chars: 200)" variant="filled" hiddenLabel multiline minRows={5} fullWidth inputProps={{maxLength:200}} />
              <Button type="submit" disabled={isSubmitting} variant="outlined" sx={{ minHeight: 30, borderColor: '#ADCD82', color: 'text.primary', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
              {submitMessage && <Typography role="status" sx={{ color: '#39542D', fontSize: 12, textAlign: 'center' }}>{submitMessage}</Typography>}
            </Stack>
          </Box>

          <Typography sx={{ py: 6, textAlign: 'center', color: '#252F27', fontFamily: 'Fira Code, monospace', fontSize: 20 }}>view visitors notes</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 180px))', justifyContent: 'center', gap: 1.25, minHeight: 190 }}>
            {visitors.map((visitor) => (
              <VisitorCard
                key={visitor.id}
                {...visitor}
                doodle={visitor.doodle ? `${apiUrl}${visitor.doodle}` : null}
              />
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
