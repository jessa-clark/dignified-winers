import { Router } from "express";
import * as controllers from "../controllers/users.js";

//abstract user routes
const router = Router();

//use imported controllers to perform different stages of authentication
router.post("/sign-up", controllers.signUp);

export default router;
