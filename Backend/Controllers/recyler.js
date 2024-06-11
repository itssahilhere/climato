import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/User';

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      const user = new User({
        name,
        email,
        hashedPassword
      });
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      res.json({ token });
    } catch {
      res.status(500).send('Error registering user');
    }
  };