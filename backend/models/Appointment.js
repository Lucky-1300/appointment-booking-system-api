const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },

  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },

  date: {
    type: String,
    required: true,
    match: [/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD date format"],
  },

  time: {
    type: String,
    required: true,
    match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "Use HH:MM 24-hour time format"],
  },

  service: {
    type: String,
    required: true,
    minlength: 3,
  },

  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);