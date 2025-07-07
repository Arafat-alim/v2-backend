import { Router } from 'express';
import { getAdminVisitors } from '../controller/visitor.controller.js';
import { getMessages } from '../controller/contact.controller.js';
import { authMiddleware } from '../middleware/auth,middleware.js';

const adminRouter = Router();

adminRouter.route('/visitors').get(authMiddleware, getAdminVisitors);
adminRouter.route('/messages').get(authMiddleware, getMessages);

export { adminRouter };
