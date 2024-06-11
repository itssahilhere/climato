import express, { json } from "express";
import connectDB from "./config/db.js";
const app = express();
import router from "./Routes/routes.js";
import cors from "cors"

connectDB();
app.use(cors());
//Init Middleware
app.use(express.json());


app.use('/api',router) ;


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
