const router = require("express").Router();
const applicationPortalController = require("../../controllers/applicationPortalController");

router
  .route("/send-email")
  .post(applicationPortalController.sendEmail);

router
  .route("/set-email-verification-token")
  .post(applicationPortalController.setEmailVerficationToken)

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

router
  .route("/test-backend-token")
  .post(applicationPortalController.testBackendToken);

module.exports = router;
