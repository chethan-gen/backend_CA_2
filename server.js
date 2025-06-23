const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT||8080;
const routes = require("./router");

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my backend")
})

app.use("/api",routes);

mongoose.connect(process.env.MONOG_URI).then(()=>{  
app.listen(PORT,()=>{
    console.log(`The server is running on http://localhost:${PORT}/`);
})
}).catch((error)=>{
    console.log("The mongoDB is not connected",error);
})