import { Router } from 'express';
import { healthCheck } from '../controller/healthcheck.controller.js';

const healthCheckRouter = Router();

healthCheckRouter.route('/healthcheck').get(healthCheck);

export { healthCheckRouter };
