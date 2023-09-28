import exppress from "express";
import { createReviewCtrl } from "../controllers/reviewCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const reviewRouter = exppress.Router();

reviewRouter.post("/:productID", isLoggedIn, createReviewCtrl);

export default reviewRouter;
