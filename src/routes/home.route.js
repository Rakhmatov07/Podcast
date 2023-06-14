const {Router} = require("express");
const {
  home,
  detailPage,
  listingPage,
  adminPage,
  addingPage,
  deletingPage,
} = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/detail-page", detailPage);
router.get("/listing-page", listingPage);
router.get("/admin", isAuth, adminPage);
router.get("/add", isAuth, addingPage);
router.get("/delete", isAuth, deletingPage);

module.exports = router;
