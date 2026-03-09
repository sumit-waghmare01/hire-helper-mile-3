require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors()); 
app.use(express.json());
connectDB();

app.use(express.json());
app.use((req,res,next)=>{
  console.log(" HIT:", req.method, req.originalUrl);
  next();
});

app.get("/", (req,res)=>{
  res.send("HireHelper Backend Running ");
});

// ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "Protected route working ",
    userId: req.userId
  });
});

const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

const requestRoutes = require("./routes/requestRoutes");
app.use("/requests", requestRoutes);


app.listen(process.env.PORT,()=>{
  console.log("Server running on port " + process.env.PORT);
});

app.use(cors());

