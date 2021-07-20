import { Router } from 'express'
import * as controllers from '../controllers/wines.js'

//abstracts express routes into one file
const router = Router();

router.get('/wines', controllers.getWines)

export default router;

