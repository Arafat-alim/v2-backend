import { Router } from 'express';
import {
  getVisitorStats,
  trackVisitor,
} from '../controller/visitor.controller.js';

const visitorRouter = Router();

visitorRouter.route('/').post(trackVisitor);
visitorRouter.route('/').get(getVisitorStats);

export { visitorRouter };
