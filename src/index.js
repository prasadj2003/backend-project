// require("dotenv").config(); -> will work but not consistent with our code
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});
import connectDB from "./db/connect.js";



















/* 
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

import express from "express";
const app = express();

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error connecting to the database: ", error)
            throw error
        })


        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR")
        throw error
    }
})()

*/