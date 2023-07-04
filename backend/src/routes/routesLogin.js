import express from 'express';
import { loginController } from '../controllers/index.js';
import validateLoginMiddleware from '../middlewares/validateLoginMiddleware.js';

const routesLogin = express.Router();

routesLogin.post('/', validateLoginMiddleware, loginController)

export default routesLogin;