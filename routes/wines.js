import { Router } from 'express'
import * as controllers from '../controllers/wines.js'

//abstracts express routes into one file
const router = Router();

router.get('/wines', controllers.getWines)
router.get('/wines/:id', controllers.getOneWine)
router.post('/wines', controllers.addWine)
router.put('/wines/:id', controllers.updateWine)
router.delete('/wines/:id', controllers.deleteWine)

export default router;

