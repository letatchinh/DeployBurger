const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(require("./routes/userRoute"));
// app.use(require('./routes/orderRoute'))
exports.app = functions.https.onRequest(app);
