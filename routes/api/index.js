const router = require("express").Router();
const applicationPortalRoutes = require("./applicationPortalRoutes");

// application-portal routes
router.use("/application-portal", applicationPortalRoutes);

module.exports = router;