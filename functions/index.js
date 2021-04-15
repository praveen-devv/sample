const functions = require("firebase-functions");
const express = require("express");

const cors = require('cors');

const stripe = require('stripe')('sk_test_51IGOJiAD3w3RAdav3V2JOpNHzaGJ1tdkmnONe3KFzSUOS7GH990qj4odseU52HM5WOjB3vcJwFktOOCLVficMjT500JhUXsEdx')


//API

//App config
const app = express();

//Middleware
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/',(request , response) => response.status(200).send('Hello world'))

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log('payment request total',total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency: "rupees",
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//listen command
exports.api = functions.https.onRequest(app)

//examp
//http://localhost:5001/clone-a332b/us-central1/api