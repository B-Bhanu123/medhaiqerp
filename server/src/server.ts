
import app from './app';
import { config } from './config/env';
import { Logger } from './core/logger';
import { seedInitialData } from './seeders/mockDataGenerator';

async function startServer() {
  try {
    await seedInitialData();

    app.listen(config.port, () => {
      Logger.info(`===================================================`);
      Logger.info(`MedhaIQ ERP Server is running on port ${config.port}`);
      Logger.info(`Environment: ${config.env}`);
      Logger.info(`API Base URL: http://localhost:${config.port}/api/v1`);
      Logger.info(`===================================================`);
    });
  } catch (error) {
    Logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
