const { Router } = require("express");
const { getTrendingExpisodes, getSingleTrendingExpisode, createTrendingEpisode, deleteTrendingExpisode } = require("../controllers/trendingEpisode.controller");
const isAuth = require("../middlewares/isAuth");
const router = Router();


router.get("/episode/trending", getTrendingExpisodes);
router.get("/episode/trending/:id", getSingleTrendingExpisode);
router.post("/episode/trending", isAuth, createTrendingEpisode);
// router.put("/episode/ternding/:id", editTerndingExpisode);
router.delete("/episode/trending/:id", isAuth, deleteTrendingExpisode);

module.exports = router;
