const router = require("./node_modules/express").Router();
const applicationPortalController = require("../../controllers/applicationPortalController");

router
  .route("/send-test-email")
  .post(applicationPortalController.sendTestEmail);

module.exports = router;
