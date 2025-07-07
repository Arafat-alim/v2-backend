import { Router } from 'express';
import {
  getVisitorStats,
  trackVisitor,
} from '../controller/visitor.controller.js';
import { visitorSchema } from '../validators/visitor.validator.js';
import { validate } from '../middleware/validate.js';

const visitorRouter = Router();

visitorRouter.route('/').post(validate(visitorSchema), trackVisitor);
visitorRouter.route('/').get(getVisitorStats);

export { visitorRouter };
