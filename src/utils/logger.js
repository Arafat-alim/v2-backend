import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';

const { combine, timestamp, printf } = format;

// Custom format for console logging with colors
const consoleLogFormat = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  printf(({ level, message, timestamp }) => {
    let coloredLevel;
    switch (level) {
      case 'info':
        coloredLevel = chalk.blue.bold(level.toUpperCase());
        break;
      case 'warn':
        coloredLevel = chalk.yellow.bold(level.toUpperCase());
        break;
      case 'error':
        coloredLevel = chalk.red.bold(level.toUpperCase());
        break;
      default:
        coloredLevel = level.toUpperCase();
    }
    return `[${timestamp}] ${coloredLevel}: ${message}`;
  }),
);

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: consoleLogFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' }),
  ],
});

export default logger;
