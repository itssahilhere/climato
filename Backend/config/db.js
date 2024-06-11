import { connect } from "mongoose";




const connectDB = async () => {
  try {
    await connect('mongodb+srv://Samyak:Cyber10@cluster0.t5hemdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;