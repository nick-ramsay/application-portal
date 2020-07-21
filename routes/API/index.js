const router = require("express").Router();
const applicationPortalRoutes = require("./applicationPortal");

// application-portal routes
router.use("/application-portal", applicationPortalRoutes);

module.exports = router;