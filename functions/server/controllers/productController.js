const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error fetching products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(`Error fetching product ${req.params.id}:`, error);
    res.status(500).json({ message: "Server Error fetching by ID" });
  }
};

// --- ADD THESE NEW FUNCTIONS ---
const getDealProducts = async (req, res) => {
    try {
      const products = await Product.find({ isDeal: true });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error fetching deals" });
    }
  };
  
  const getBestsellerProducts = async (req, res) => {
    try {
      const products = await Product.find({ isBestseller: true });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error fetching bestsellers" });
    }
  };

// --- UPDATE THIS LINE ---
module.exports = {
    getProducts,
    getProductById,
    getDealProducts,
    getBestsellerProducts,
  };