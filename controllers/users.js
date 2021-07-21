import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

//to further secure encryption
const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;

//for jwt signature verification
const TOKEN_KEY = process.env.TOKEN_KEY || "themostamazingestkey";

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
      const token = jwt.sign(payload, TOKEN_KEY)
      //if successful server will respond with user's token
      res.status(201).json({ token })
    } else {
      //if not server will respond with invalid credentials
      res.status(401).send("Invalid credentials in a string")
    }
  } catch (error) {
    //if anything at all goes wrong, server will respond with appropriate error
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
};
