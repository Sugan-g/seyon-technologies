import { Router } from 'express';
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
    // MongoDB connection is already established by server.js
    // Save the contact submission.
    const saved = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      service,
      message
    });

    console.log('Contact saved successfully:', saved._id.toString());

    return res.status(201).json({
      ok: true,
      id: saved._id
    });
  } catch (err) {
    console.error('Contact form error:', err);

    return res.status(500).json({
      error: 'Could not save your message.'
    });
  }
});

export default router;