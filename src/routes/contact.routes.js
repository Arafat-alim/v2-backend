import { Router } from 'express';
import { submitContact } from '../controller/contact.controller.js';
import { validate } from '../middleware/validate.js';
import { contactSchema } from '../validators/contact.validator.js';

const contactRouter = Router();

contactRouter.route('/').post(submitContact);

export { contactRouter };
