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

const { check } = require("express-validator");
const validateRequest = require("../middleware/validationMiddleware");

router.post(
  "/",
  protect,
  [
    check("name").notEmpty().isLength({ min: 2 }),
    check("email").isEmail(),
    check("date").notEmpty().matches(/^\d{4}-\d{2}-\d{2}$/),
    check("time").notEmpty().matches(/^([01]\d|2[0-3]):([0-5]\d)$/),
    check("service").notEmpty().isLength({ min: 3 }),
  ],
  validateRequest,
  createAppointment
);

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

router.put(
  "/:id",
  protect,
  [
    check("name").optional().isLength({ min: 2 }),
    check("email").optional().isEmail(),
    check("date").optional().matches(/^\d{4}-\d{2}-\d{2}$/),
    check("time").optional().matches(/^([01]\d|2[0-3]):([0-5]\d)$/),
    check("service").optional().isLength({ min: 3 }),
  ],
  validateRequest,
  updateAppointment
);

router.delete("/:id", protect, deleteAppointment);

module.exports = router;