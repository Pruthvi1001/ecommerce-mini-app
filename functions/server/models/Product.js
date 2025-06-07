const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  // --- NEW FIELDS ---
  isDeal: { type: Boolean, default: false },
  originalPrice: { type: Number, default: null }, // To show a discount
  isBestseller: { type: Boolean, default: false },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;