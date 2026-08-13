import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = Router();

// POST /api/contact — saves a submission from the Contact page form.
router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required.' });
  }

  try {
    if (mongoose.connection.readyState === 1) {
      const saved = await Contact.create({ name, email, message });
      return res.status(201).json({ ok: true, id: saved._id });
    }

    // DB not connected (e.g. local dev without Mongo running) — still
    // acknowledge the submission so the frontend flow can be tested.
    console.log('Contact form submission (not persisted):', { name, email, message });
    return res.status(201).json({ ok: true, persisted: false });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Could not save your message.' });
  }
});

export default router;
