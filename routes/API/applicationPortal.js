const router = require("express").Router();
const applicationPortalController = require("../../controllers/applicationPortalController");

router
  .route("/send-dummy-email")
  .post(applicationPortalController.sendDummyEmail);