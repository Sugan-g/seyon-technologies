import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

const app = express();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI environment variable is missing');
}

app.use(
  cors({
    origin: [
      'https://seyontechnologies.com',
      'https://www.seyontechnologies.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Seyon Technologies API is running',
  });
});

let mongoConnection;

async function connectDB() {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is not configured');
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!mongoConnection) {
    mongoConnection = mongoose.connect(MONGO_URI).catch((error) => {
      mongoConnection = null;
      throw error;
    });
  }

  await mongoConnection;
}

app.use('/api/contact', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('MongoDB connection error:', error.message);

    res.status(500).json({
      error: 'Database connection failed',
    });
  }
});

app.use('/api/contact', contactRouter);

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    error: 'Something went wrong.',
  });
});

// Vercel uses the exported Express application.
export default app;

// Local development only.
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `Seyon Technologies API running on http://localhost:${PORT}`
        );
      });
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);

      app.listen(PORT, () => {
        console.log(
          `Seyon Technologies API running on http://localhost:${PORT}`
        );
      });
    });
}