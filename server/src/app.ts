
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/error';
import { Logger } from './core/logger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  Logger.info(`[${req.method}] ${req.url}`);
  next();
});

// API Routes
app.use('/api/v1', routes);

// Global Error Handler
app.use(errorHandler);

export default app;
