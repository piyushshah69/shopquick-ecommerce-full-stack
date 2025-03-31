const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product.js");
const User = require("./models/User.js");
const products = require("./data/products.js");
const Cart = require("./models/Cart.js");

dotenv.config();

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed data

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create a default admin user
    const createdUser = await User.create({
      name: "Piyush",
      email: "piyushshah159@gmail.com",
      password: "12345678",
      role: "admin",
    });
    
    // Assign the default user ID to each product
    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    // Insert the products into the database
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();