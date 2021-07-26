import { Router } from "express";
import * as controllers from "../controllers/users.js";

//abstract user routes
const router = Router();

//use imported controllers to perform different stages of authentication
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

router.get("/users/:id/wines", controllers.getUserWines);
router.get("/users/:id/wines/:wineId", controllers.getUserWine);

export default router;
