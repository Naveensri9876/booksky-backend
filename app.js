const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Use CORS only once with correct origins
app.use(cors({
  origin: [
    "https://booksky-frontend.onrender.com",  // Your actual deployed frontend
    "http://127.0.0.1:5500"                   // Local development
  ]
}));

// Middleware
app.use(express.json());

// Routes
const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

// MongoDB URI from environment
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error("❌ MongoDB Error:", err));
