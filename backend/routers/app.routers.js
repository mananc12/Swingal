const express = require("express");

const router = express.Router();
const controller = require("../controllers/app.controllers");

const loginSchema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");
const registerSchema = require("../validators/register-validator");
const zodContactFormSchema = require("../validators/contact-validator");

router.route("/").get(controller.home);
router.route("/login").post(validate(loginSchema), controller.login);
router.route("/register").post(validate(registerSchema), controller.register);
router
  .route("/contact")
  .post(validate(zodContactFormSchema), controller.contact);
router
  .route("/profile/:userId")
  .get(controller.userDetails)
  .patch(controller.userUpdate);
module.exports = router;
