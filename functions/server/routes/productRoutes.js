const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const {
  getProducts,
  getProductById,
  getDealProducts, // Import new functions
  getBestsellerProducts,
} = require("../controllers/productController");

// --- NEW API ROUTES ---
router.get("/products/deals", getDealProducts);
router.get("/products/bestsellers", getBestsellerProducts);

// --- TEMPORARY SEEDER WITH EXPANDED DATA ---
router.get("/products/seed", async (req, res) => {
  try {
    const productsToSeed = [
      // --- HOME DECOR ---
      { name: "Modern Ceramic Vase", description: "A beautifully crafted minimalist vase for any modern home.", price: 39.99, imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop", category: "Home Decor", isBestseller: true },
      { name: "Velvet Throw Pillow", description: "Plush and luxurious, adding a touch of elegance.", price: 29.99, imageUrl: "https://images.unsplash.com/photo-1618220252344-88b9a184b86d?q=80&w=1887&auto=format&fit=crop", category: "Home Decor" },
      { name: "Minimalist Desk Lamp", description: "Sleek LED lamp with adjustable brightness.", price: 59.99, originalPrice: 79.99, imageUrl: "https://images.unsplash.com/photo-1588810629033-01867c42336a?q=80&w=1887&auto=format&fit=crop", category: "Home Decor", isDeal: true },
      // --- ELECTRONICS ---
      { name: "Wireless Charging Pad", description: "Sleek, fast, and convenient Qi-enabled charging.", price: 25.00, originalPrice: 35.00, imageUrl: "https://images.unsplash.com/photo-1542037104857-4bb4b9fe3366?q=80&w=1770&auto=format&fit=crop", category: "Electronics", isDeal: true },
      { name: "Noise-Cancelling Headphones", description: "Immersive sound, all-day comfort. Perfect for focus.", price: 149.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop", category: "Electronics", isBestseller: true },
      { name: "Smart Fitness Watch", description: "Track your health, workouts, and notifications.", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1544117519-31a8b74df76c?q=80&w=1887&auto=format&fit=crop", category: "Electronics" },
      // --- STATIONERY ---
      { name: "Leatherbound Journal", description: "Premium A5 journal with 200 lined pages.", price: 24.99, imageUrl: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=1887&auto=format&fit=crop", category: "Stationery" },
      { name: "Fountain Pen Set", description: "Classic design with a smooth nib and ink converter.", price: 45.99, imageUrl: "https://images.unsplash.com/photo-1626266061368-46a8f5787455?q=80&w=1887&auto=format&fit=crop", category: "Stationery", isBestseller: true },
      // --- GOURMET ---
      { name: "Artisan Coffee Beans", description: "12oz bag of single-origin Ethiopian Yirgacheffe beans.", price: 18.99, imageUrl: "https://images.unsplash.com/photo-1559497552-c84d73326199?q=80&w=1887&auto=format&fit=crop", category: "Gourmet" },
      { name: "Gourmet Chocolate Truffles", description: "A box of 12 assorted handcrafted chocolate truffles.", price: 34.99, imageUrl: "https://images.unsplash.com/photo-1599381313418-2e3e68021155?q=80&w=1887&auto=format&fit=crop", category: "Gourmet", isDeal: true, originalPrice: 40.00 },
    ];
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(productsToSeed);
    res.status(201).json({ message: "Database seeded successfully!", products: createdProducts });
  } catch (error) {
    res.status(500).json({ message: "Error seeding database" });
  }
});

// --- MAIN API ROUTES ---
router.get("/products", getProducts);
router.get("/products/:id", getProductById); // This must be last

module.exports = router;