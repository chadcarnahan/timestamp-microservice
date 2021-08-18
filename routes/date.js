const express = require("express");
const router = express.Router();
const { getTime, getCurrent } = require("../controllers/controller");

router.route("/:date").get(getTime);
router.route("/").get(getCurrent);

module.exports = router;
