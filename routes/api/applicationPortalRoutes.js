const router = require("express").Router();
const applicationPortalController = require("../../controllers/applicationPortalController");

router
  .route("/send-test-email")
  .post(applicationPortalController.sendTestEmail);

router
  .route("/create-account")
  .post(applicationPortalController.createAccount);

module.exports = router;
