const mongoose = require('mongoose');
const Product = require('./functions/server/models/Product');
const MONGO_URI = "mongodb+srv://pruthvijain:TQdgkKzzoF6Q6j2N@shopluxe-mini-cluster.gk3mvqc.mongodb.net/shopluxemini?retryWrites=true&w=majority&appName=shopluxe-mini-cluster";

const products = [
  { name: 'Modern Ceramic Vase', description: 'A beautifully crafted minimalist vase, perfect for any modern home decor.', price: 49.99, imageUrl: '/images/vase.jpg', category: 'Home Decor' },
  { name: 'Wireless Charging Pad', description: 'Sleek, fast, and convenient. This wireless charging pad supports Qi-enabled devices.', price: 29.99, imageUrl: '/images/charger.jpg', category: 'Electronics' },
  { name: 'Leatherbound Journal', description: 'Premium A5 journal with 200 lined pages. The genuine leather cover adds a touch of class.', price: 24.99, imageUrl: '/images/journal.jpg', category: 'Stationery' },
  { name: 'Artisan Coffee Beans', description: 'A 12oz bag of single-origin Ethiopian Yirgacheffe coffee beans.', price: 18.99, imageUrl: '/images/coffee.jpg', category: 'Gourmet' },
];

const importData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Atlas Connected for Seeding...');
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported to Atlas Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

importData();