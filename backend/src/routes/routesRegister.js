import express from 'express';
import {registerController} from '../controllers/index.js';
import validateRegisterMiddleare from '../middlewares/validateRegisterMiddleware.js'

const routesRegister = express.Router();

routesRegister.post('/', validateRegisterMiddleare,registerController  )

export default routesRegister;