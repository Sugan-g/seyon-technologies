import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    service,
    message
  } = req.body || {};

  // Validate required fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !service ||
    !message
  ) {
    return res.status(400).json({
      error: 'All fields are required.'
    });
  }

  try {
    if (mongoose.connection.readyState === 1) {
      const saved = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        service,
        message
      });

      return res.status(201).json({
        ok: true,
        id: saved._id
      });
    }

    console.log('Contact form submission (not persisted):', {
      firstName,
      lastName,
      email,
      phone,
      service,
      message
    });

    return res.status(201).json({
      ok: true,
      persisted: false
    });
  } catch (err) {
    console.error('Contact form error:', err.message);

    return res.status(500).json({
      error: 'Could not save your message.'
    });
  }
});

export default router;