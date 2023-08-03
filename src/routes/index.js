const { Router } = require("express");
const auth_router = require("./user");
const router = Router();

router.use(auth_router);

module.exports = router;