import express from 'express';
import { clientLogin, clientSignup } from '../controller/client.controller.js';
import { loginValidation, signupValidation } from '../validation/client.validation.js';
const clientRouter = express.Router();

clientRouter.post("/clientSignup", signupValidation ,clientSignup)
clientRouter.post("/clientLogin", loginValidation ,clientLogin)

export default clientRouter;