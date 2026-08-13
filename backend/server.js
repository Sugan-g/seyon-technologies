import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/seyon_technologies';

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contact', contactRouter);

// Generic error handler — keeps console output clean, returns JSON.
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Something went wrong.' });
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('MongoDB connection failed — contact form will not persist. ' + err.message);
  }

  app.listen(PORT, () => {
    console.log(`Seyon Technologies API running on http://localhost:${PORT}`);
  });
}

start();
