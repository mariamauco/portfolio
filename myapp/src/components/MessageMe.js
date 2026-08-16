import React, { useState } from 'react'
import { buttonStyle } from './styles'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function MessageMe({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: 'Hey Maria! I want to discuss...',
  });

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = () => {
    const serviceID = 'service_uatiob5';
    const templateID = 'template_rifirai';
    const publicKey = 'RWUVL4-2mBqWPUpPU';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        handleClose();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 600 }}>Send a message</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
        <Typography sx={{ fontSize: '14px' }}>
          Whether you want to collaborate on a project, need help solving a problem, or want to talk tech, reach out by
          sending a message. Let's take your ideas to the next level!
        </Typography>
        <TextField
          size="small"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          size="small"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}