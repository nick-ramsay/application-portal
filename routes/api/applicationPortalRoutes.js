const router = require("express").Router();
const applicationPortalController = require("../../controllers/applicationPortalController");

router
  .route("/send-test-email")
  .post(applicationPortalController.sendTestEmail);

router
  .route("/create-account")
  .post(applicationPortalController.createAccount);

router
  .route("/check-existing-account-emails")
  .post(applicationPortalController.checkExistingAccountEmails);

router
  .route("/reset-password-request")
  .post(applicationPortalController.resetPasswordRequest);

module.exports = router;
