const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

router.post("/", protect, createAppointment);

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

router.put("/:id", protect, updateAppointment);

router.delete("/:id", protect, deleteAppointment);

module.exports = router;