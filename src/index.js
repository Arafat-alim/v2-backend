import 'dotenv/config';

import { app } from './app.js';
import logger from './utils/logger.js';
import morgan from 'morgan';
import connectDB from './db/index.js';
import { healthCheckRouter } from './routes/healthcheck.routes.js';

const PORT = process.env.PORT || '5001';
const morganFormat = ':method :url :status :response-time ms';

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

//! health check route
app.use('/api/v1', healthCheckRouter);

connectDB()
  .then(() => {
    //! app listening
    app.listen(PORT, () => {
      console.log(
        `Server is running at http://localhost:${PORT}/api/v1/healthcheck`,
      );
    });
  })
  .catch((err) => console.log('Failed to connect to MongoDB: ', err));

export default app;
