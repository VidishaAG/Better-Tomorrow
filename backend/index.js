import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import LOGIN_ROUTE from "./Routes/login.js";
import REGISTER_ROUTE from "./Routes/register.js";

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
var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',  
    key_secret: 'YOUR_KEY_SECRET',
  });
// API signature
// {razorpayInstance}.{resourceName}.{methodName}(resourceId [, params])

// example

instance.payments.fetch(paymentId)
