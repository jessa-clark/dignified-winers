import { Router } from "express";
import * as controllers from "../controllers/users";

//abstract user routes
const router = Router();

//use imported controllers to perform different stages of authentication
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify-password", controllers.verify);
router.post("/change-password", controllers.changePassword);

export default router;
