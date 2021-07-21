import { Router } from "express";
import userRoutes from "./users.js";
import wineRoutes from "./wines.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the API root!"));
router.use("/", userRoutes);
router.use("/", wineRoutes);

export default router;
