const { Router } = require("express");
const router = Router();

const { CreateShortener } = require("./url.controllers");


router.get("/url", CreateShortener);

module.exports = router;