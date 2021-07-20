import Wine from '../models/wine.js'

export const getWines = async (req, res) => {
  try {
    const wine = await Wine.find()
    res.json(wine) 
  } catch (error){
    res.status(500).send(error.message)
  }
}

