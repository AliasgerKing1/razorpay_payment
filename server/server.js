import { app } from "./app.js"
import Razorpay from "razorpay"
import { connectDB } from "./config/Database.js";

connectDB();
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });



app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})