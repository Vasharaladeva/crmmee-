import exppress from 'express';
import { registerUserCtrl,loginUserCtrl,getUserProfileCtrl } from "../controllers/usersCtrl.js";
import { isLoggedIn } from '../middlewares/isLoggedin.js';


const userRoutes = exppress.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);

export default userRoutes;

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA4NzNjYzhlNzhjY2JlZDVhMDJiZiIsImlhdCI6MTY4NzE5NDY0OCwiZXhwIjoxNjg3NDUzODQ4fQ.mtjwRXZvd8HmcAwmGGfyqESGRWNVvM5kgK46rTDt9kE
// {
//     "fullname":"Admin11",
//     "email": "1admin111@gmail.com",
//     "password":"12345"
// }