import Wine from "../models/wine.js";

export const getWines = async (req, res) => {
  try {
    const wines = await Wine.find();
    res.json(wines);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getOneWine = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    res.json(wine);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addWine = async (req, res) => {
  try {
    const wine = new Wine(req.body);
    await wine.save();
    res.status(201).json(wine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateWine = async (req, res) => {
  try {
    const { id } = req.params;
    await Wine.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, wine) => {
        if (err) {
          res.status(500).json(err);
        }
        if (!wine) {
          res.status(500).send("Wine not found!");
        }
        return res.status(200).json(wine);
      }
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteWine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Wine.findByIdAndUpdate(id);
    if (deleted) {
      return res.status(200).send("Wine deleted!");
    }
    throw new Error("Wine not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
