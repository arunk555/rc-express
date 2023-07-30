const { Router } = require("express");
const auth_router = require("./auth");
const router = Router();

router.use(auth_router);

module.exports = router;