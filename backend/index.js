import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import shortid from "shortid";
import LOGIN_ROUTE from "./Routes/login.js";
import REGISTER_ROUTE from "./Routes/register.js";

import Razorpay from "razorpay";
const razorpay = new Razorpay({
  key_id: 'rzp_test_qNV9WLxsfAwbiK',
  key_secret: 'ONs4O72R8YVGDfoDnlACLYVD',
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

app.use(cors())
app.use(bodyParser.json())


app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})