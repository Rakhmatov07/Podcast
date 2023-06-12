const {Router} = require("express");
const {
  home,
  detailPage,
  listingPage,
  adminPage,
} = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/detail-page", detailPage);
router.get("/listing-page", listingPage);
router.get("/admin", isAuth, adminPage);

module.exports = router;
