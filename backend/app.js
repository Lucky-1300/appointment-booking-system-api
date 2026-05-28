const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const logger = require("./middleware/loggerMiddleware");

const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(logger);

app.use(express.json());

connectDB();

const appointmentRoutes = require("./routes/appointmentRoutes");

const authRoutes = require("./routes/authRoutes");

app.use("/api/appointments", appointmentRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Appointment Booking API is running 🚀");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});