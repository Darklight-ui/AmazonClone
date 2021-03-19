const functions = require('firebase-functions');
const express = require("express");
const cors  = require("cors");
const stripe = require("stripe")('sk_test_51HiXszC3z4d6kvB71WjeQYZlErgSBdz21RNPKIwrbbHKdmITbCklzN9jzOQZOSJZosZ0ARE1npZnVqIBxMyy2UzC00iNVIR5JM')


//API

// App config
const app = express
//middlewares
app.use(cors({origin: true}))
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


// Listen command

exports.api = functions.httpsonRequest(app)

//http://localhost:5001/app-clone-ad0eb/us-central1/api
