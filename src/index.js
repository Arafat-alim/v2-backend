import 'dotenv/config';

import { app } from './app.js';
import logger from './utils/logger.js';
import morgan from 'morgan';
import chalk from 'chalk';
import connectDB from './db/index.js';
import { healthCheckRouter } from './routes/healthcheck.routes.js';
import { adminRouter } from './routes/admin.routes.js';
import { visitorRouter } from './routes/visitor.routes.js';
import { contactRouter } from './routes/contact.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const PORT = process.env.PORT || '5001';
const morganFormat = ':method :url :status :response-time';

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const parts = message.trim().split(' ');
        const method = parts[0];
        const url = parts[1];
        const status = parts[2];
        const responseTime = parts[3];
        const coloredMessage = `${chalk.blue(method)} ${chalk.cyan(url)} ${chalk.yellow(status)} ${chalk.magenta(responseTime + 'ms')}`;
        logger.info(coloredMessage);
      },
    },
  }),
);

//! health check route
app.use('/api', healthCheckRouter);
app.use('/api/admin', adminRouter);
app.use('/api/visitors', visitorRouter);
app.use('/api/contact', contactRouter);
app.use('/api/auth', authRouter);

// Error Handler
app.use(errorHandler);

connectDB()
  .then(() => {
    //! app listening
    app.listen(PORT, () => {
      console.log(
        `Server is running at http://localhost:${PORT}/api/healthcheck`,
      );
    });
  })
  .catch((err) => console.log('Failed to connect to MongoDB: ', err));

export default app;
