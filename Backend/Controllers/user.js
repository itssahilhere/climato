import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Model/User.js";
import Booking from "../Model/Booking.js";
const jwtSecret = "asdfgasdfg";
export const signUp = async (req, res) => {
  console.log('hgdjhg');
  const { name, email, password } = req.body;
  console.log(req.body)
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    //const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    console.log("dsds");
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    console.log("sdf");
    console.log(jwt);
    const token = jwt.sign(payload, jwtSecret);
    let result = {
      email:email,
      token:token
    } 
    res.status(201).json(result)
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
};
export const fetchLeaderboard=async(req,res)=> {
  try {
    const documents = await User.find().sort({ climatoscore: 1 }).exec();
    res.status(200).json(documents.Stringify);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error")
  }
}
export const bookrecycle = async (req, res) => {
  const { pickupTime, eWasteType, pickupLocation, img } = req.body;
  let success = "E-Waste Recycler Is On The Way";
  try {
    const booking = new Booking({
      pickupTime,
      eWasteType,
      pickupLocation,
      user: req.user.id,
      status: success // Set default status
    });
    await booking.save();
    success = true;
    let upuser=req.user;
    upuser.climatoscore+=10;
    await upuser.save();
    res.json({ booking, success });
  } catch (err) {
    console.error(err.msg)
    console.log(req.body);
    //console.log(req)
    res.status(500).send("Internal server error");
  }
}
export const cancelrecycle = async (req, res) => {
  const { bookingid } = req.body;
  try {
    let booking = await Booking.findOne({ id:bookingid });
    if (!booking) {
      return res.status(404).send("Not Found");
    }
    booking.status="Cancelled"
    res.json({ "Success": "Recycle request cancelled successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
};