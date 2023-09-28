import exppress from "express";
import { createProductCtrl, deleteProductCtrl, getProductCtrl, getProductsCtrl, updateProductCtrl } from "../controllers/productsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const productsRouter = exppress.Router();

productsRouter.post( "/",isLoggedIn,createProductCtrl,);

productsRouter.get( "/",getProductsCtrl);

productsRouter.get( "/:id",getProductCtrl);

productsRouter.put( "/:id",isLoggedIn,updateProductCtrl);

productsRouter.delete( "/:id/delete",isLoggedIn,deleteProductCtrl);

export default productsRouter;
