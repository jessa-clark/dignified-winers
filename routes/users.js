import { Router } from "express";
import * as controllers from "../controllers/users.js";
import restrict from "../helpers/restrict.js";

//abstract user routes
const router = Router();

//use imported controllers to perform different stages of authentication
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

router.get("/users/:id/wines", controllers.getUserWines);
router.get("/users/:id/wines/:wineId", controllers.getUserWine);
router.post("/users/:id/wines", restrict, controllers.createUserWine);
router.put("/users/:id/wines/:wineId", restrict, controllers.updateUserWine);
router.delete("/users/:id/wines/:wineId", restrict, controllers.deleteUserWine);

export default router;
