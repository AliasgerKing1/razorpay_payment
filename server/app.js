import express, { urlencoded } from "express";
import PaymentRoute from "./routes/PaymentRoutes.js"
import cors from "cors"
import { config } from "dotenv"

config({path : "./config/config.env"})

export const app = express();

app.use(cors())
app.use(express.json())
app.use(urlencoded({extended : true}))

app.use("/api", PaymentRoute)

app.get("/api/getkey", (req, res) => res.status(200).json({key : process.env.RAZORPAY_API_KEY}))