const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const {create} = require("../controllers/teacher.controller");

const router = Router();

router.post("/teacher", isAuth, create);

module.exports = router;
