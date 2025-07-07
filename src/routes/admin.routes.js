import { Router } from 'express';
import { getAdminVisitors } from '../controller/visitor.controller.js';
import { getMessages } from '../controller/contact.controller.js';

const adminRouter = Router();

adminRouter.route('/visitors').get(getAdminVisitors);
adminRouter.route('/messages').get(getMessages);

export { adminRouter };
