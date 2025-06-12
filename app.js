// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000; // Directly use the port

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

// MongoDB connection directly (NO .env)
mongoose
  .connect("mongodb+srv://Naveensri:naveensri@cluster0.uxlks.mongodb.net/booksky?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));
