import React from 'react'
import axios from "axios"

import Card from "./Card"
import {Box, Stack} from "@chakra-ui/react"

const Home = () => {

    let checkOutHandler = async (amount) => {
        const {data:{key}} = await axios.get("http://localhost:4020/api/getkey")
const { data:{order} } = await axios.post("http://localhost:4020/api/checkout", {
    amount
})
var options = {
    key,
    amount: order.amount, 
    currency: "INR",
    name: "Aliasger Bohra",
    description: "Test Transaction",
    image: "https://ibb.co/DDsKLkr",
    order_id: order.id,
    callback_url: "http://localhost:4020/api/paymentverification",
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#121212"
    }
};
var razor = new window.Razorpay(options);
    razor.open();
}
  return (
    <>
<Box>
    <Stack direction={["column", "row"]} height={"100vh"} justifyContent="center" alignItems="center">
    <Card amount={5000} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUTV0u8or53kL0BLfu3GFGhA3T_Fu-YGX7A&s" checkOutHandler={checkOutHandler} />
    <Card amount={9000} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1ViT05bWdLHSG61tS-qDy5KJ_Erj-3W8nQ&s" checkOutHandler={checkOutHandler} />
    </Stack>
</Box>
    </>
  )
}

export default Home