const { Router } = require("express");
const { getLatestExpisodes, getSingleLatestExpisode, createLatestEpisode, deleteLatestExpisode } = require("../controllers/latestEpisode.controller");
const isAuth = require("../middlewares/isAuth");
const router = Router();


router.post("/episode/latest/delete", isAuth, deleteLatestExpisode);
router.get("/episode/latest", getLatestExpisodes);
router.get("/episode/latest/get", getSingleLatestExpisode);
router.post("/episode/latest", isAuth, createLatestEpisode);
// router.put("/episode/latest/:id", editLatestExpisode);

module.exports = router;
