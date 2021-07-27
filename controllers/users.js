import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Wine from "../models/wine.js";

//to further secure encryption
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 11;

//for jwt signature verification
const TOKEN_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.TOKEN_KEY
    : "themostamazingestkey";

//for jwt expiration
const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    //get body that comes with request via front-end
    const { username, email, password } = req.body;

    //creates a hash of password so password won't be stored directly in database
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);

    //create new user and replace password with password_digest
    const user = new User({
      username,
      email,
      password_digest,
    });

    //add user to database
    await user.save();

    //create users credentials from newly created user in database
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      //create expiration date for credentials
      exp: parseInt(exp.getTime() / 1000),
    };
    //jwt will load with supplied information
    const token = jwt.sign(payload, TOKEN_KEY);

    //on success reply with token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    //retrieving email and password from request body
    const { email, password } = req.body;
    //defining a user with a matching email
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    //if the user's inputted password is the same as the password saved on the database,

    if (await bcrypt.compare(password, user.password_digest)) {
      //making a payload with the user's information
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };
      //using payload and token key to create the unique JWT token
      const token = jwt.sign(payload, TOKEN_KEY);
      //if successful server will respond with user's token
      res.status(201).json({ token });
    } else {
      //if not server will respond with invalid credentials
      res.status(401).send("Invalid credentials in a string");
    }
  } catch (error) {
    //if anything at all goes wrong, server will respond with appropriate error
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not authorized");
  }
};

export const getUserWines = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userWines = await Wine.find({ userId: user._id });
    return res.json(userWines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserWine = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userWine = await Wine.findById(req.params.wineId).populate("userId");
    if (userWine.userId.equals(user._id)) {
      return res.json(userWine);
    }
    throw new Error(`Wine ${userWine._id} does not belong to user ${user._id}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUserWine = async (req, res) => {
  try {
    if (await User.findById(req.body.userId)) {
      const userWine = new Wine(req.body);
      await userWine.save();
      res.status(201).json(userWine);
    }
    throw new Error(`User ${req.body.userId} does not exist!`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateUserWine = async (req, res) => {
  try {
    const { id, wineId } = req.params;
    if (await User.findById(id)) {
      const wine = await Wine.findByIdAndUpdate(wineId, req.body, {
        new: true,
      });
      res.status(201).json(wine);
    }
    throw new Error(`User ${id} does not exist!`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserWine = async (req, res) => {
  try {
    const { id, wineId } = req.params;
    if (await User.findById(id)) {
      const deleted = await Wine.findByIdAndDelete(wineId);
      if (deleted) {
        return res.status(200).send("Product deleted!");
      }
      throw new Error(`Wine ${wineId} not found!`);
    }
    throw new Error(`User ${id} does not exist!`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
