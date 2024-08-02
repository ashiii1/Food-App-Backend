const express= require("express");
const cors= require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { menuRouter } = require("./routes/menu.route");
const { cartRouter } = require("./routes/cart.route");
// const { auth } = require('express-openid-connect');
// const { config } = require("./config/auth0Config");
// const { authCallback } = require("./controller/auth.controller");
require("dotenv").config();


const app= express();
app.use(express.json());

app.use(cors())


// Auth0 middleware
// app.use(auth(config));

app.use("/user",userRouter)
app.use("/menu", menuRouter)
app.use("/cart", cartRouter)
app.get("/",(req,res)=>{
    res.send("Welcome to The Street Bites Server")
})

// app.post('/api/auth/callback', authCallback);


app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("Connected to DB");
        console.log(`Server is Running on PORT ${process.env.PORT}`)
    } catch (error) {
        console.log("Server", error.message)
    }
})

