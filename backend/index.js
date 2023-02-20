import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

// sending post from localhost:3000 to localhost:5000
import cors from 'cors'

import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import UploadRoute from './Routes/UploadRoute.js'

//Routes


const app = express()

//to serve images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// to allow sending request to cross origin, e.g localhost:3000 to localhost:5000 
app.use(cors())

dotenv.config()

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    app.listen(process.env.PORT, () =>
        console.log(`Listening at ${process.env.PORT}`)
    )
).catch((error) => console.log(error));


// Usage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/upload', UploadRoute)