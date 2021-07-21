import { Router } from "express";
import * as controllers from "../controllers/wines.js";
import restrict from "../helpers/restrict.js"

//abstracts express routes into one file
const router = Router();

router.get("/wines", controllers.getWines);
router.get("/wines/:id", controllers.getOneWine);
router.post("/wines", restrict, controllers.addWine);
router.put("/wines/:id", restrict, controllers.updateWine);
router.delete("/wines/:id", restrict, controllers.deleteWine);

export default router;
