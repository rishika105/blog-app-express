//instantiate
const express = require("express");
const app= express();

//defining the port
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware parsing
app.use(express.json());

//define routes
const blog = require("./routes/blog")
//mount route
app.use("/api/v1", blog);

//db connection
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, ()=>{
    console.log(`App is Started at Port no. ${PORT}`);
})

//default route
app.get("/", (req,res)=>{
    res.send('<h1>why are u doing this bro</h1>')
})