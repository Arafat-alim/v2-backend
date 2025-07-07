import { Router } from 'express';
import { submitContact } from '../controller/contact.controller.js';

const contactRouter = Router();

contactRouter.route('/contact').post(submitContact);

export { contactRouter };
