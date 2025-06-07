const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// THE FIX: Tell Express to use our productRoutes for any request starting with /api
app.use("/api", productRoutes);

exports.api = functions.https.onRequest(app);