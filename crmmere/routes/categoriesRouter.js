import exppress from "express";
import { createCategoryCtrl, deleteCategoryCtrl, getAllCategoriesCtrl, getSingleCategoryCtrl, updateCategoryCtrl } from "../controllers/categoriesCtrl.js"
import { isLoggedIn } from "../middlewares/isLoggedin.js"

const categoriesRouter = exppress.Router()

categoriesRouter.post("/",isLoggedIn ,createCategoryCtrl)

categoriesRouter.get("/" ,getAllCategoriesCtrl)

categoriesRouter.get("/:id" ,getSingleCategoryCtrl)

categoriesRouter.delete("/:id" ,deleteCategoryCtrl)

categoriesRouter.put("/:id" ,updateCategoryCtrl)


export default categoriesRouter