import express from 'express';
import { createOrderCtrl } from '../controllers/orderCtrl.js';
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const orderRouter = express.Router();

orderRouter.post('/',isLoggedIn,createOrderCtrl)

export default orderRouter;