import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const shortid = require('shortid')
import LOGIN_ROUTE from "./Routes/login.js";
import REGISTER_ROUTE from "./Routes/register.js";

const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_XNoNQDW2fTj9n3',
  key_secret: 'QYaFd5DEMEDaY7Sq9liC0ael',
});

const app = express();

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

const MONGO_URI =
  "mongodb+srv://Ilikepizza2:Lushcats@lushcats.brhag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server up and running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", LOGIN_ROUTE);
app.use("/", REGISTER_ROUTE);

// razor pay
app.post('/razorpay', async (req, res) => {
  razorpay.orders.create({
    amount: (amount * 100).toString(), 
    currency, 
    receipt: , 
    payment_capture, 
    notes
  })
})
