const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const PrimaryConnection=require("./config/Primary")
const router=require("./routers/userRouter")

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

// PrimaryConnection();
app.use("/user",router);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));