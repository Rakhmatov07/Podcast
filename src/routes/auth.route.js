const {Router} = require("express");
const {login, loginGet} = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/login", login);
router.get("/login", loginGet);

module.exports = router;
