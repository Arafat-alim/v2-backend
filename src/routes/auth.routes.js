import { Router } from 'express';
import { handleLogin } from '../controller/auth.controller.js';

const authRouter = Router();

authRouter.route('/login').post(handleLogin);

export { authRouter };
