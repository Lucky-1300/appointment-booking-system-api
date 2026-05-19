const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const logger = require("./middleware/loggerMiddleware");

const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(logger);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

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