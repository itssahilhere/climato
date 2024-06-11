import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/User.js';
import Recycler from '../Model/Recycler.js'
//import jwtSecret from '../config/default.json'



const jwtSecret ="asdfgasdfg"
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email+" "+password)
  try {
    console.log("yo");
    console.log();
    const user = await User.findOne({ email:email });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    let result = {
      email:email,
      token:token
    } 
    res.status(201).json(result)
  } catch {
    res.status(500).send('Error logging in');
  }
};
export const crlogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const  cr = await Recycler.findOne({ username });
    if (!cr) {
      return res.status(400).send('Recycler not found');
    }
    const passwordMatch = await bcrypt.compare(password, cr.password);
    if (!passwordMatch) {
      return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: cr._id }, jwtSecret);
    res.json({ token });
  } catch {
    res.status(500).send('Error logging in');
  }
};
