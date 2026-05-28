const express = require("express");

const router = express.Router();

const { check } = require("express-validator");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const validateRequest = require("../middleware/validationMiddleware");

router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("Name is required").isLength({ min: 2 }),
    check("email").isEmail().withMessage("Valid email is required"),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  validateRequest,
  registerUser
);

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Valid email is required"),
    check("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  loginUser
);

module.exports = router;