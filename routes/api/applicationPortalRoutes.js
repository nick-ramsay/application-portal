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

router
  .route("/check-email-and-reset-token")
  .post(applicationPortalController.checkEmailAndToken);

router
  .route("/reset-password")
  .post(applicationPortalController.resetPassword);

router
  .route("/reset-login")
  .post(applicationPortalController.login);

router
  .route("/set-session-access-token")
  .post(applicationPortalController.setSessionAccessToken);

router
  .route("/fetch-account-details")
  .post(applicationPortalController.fetchAccountDetails);

module.exports = router;
