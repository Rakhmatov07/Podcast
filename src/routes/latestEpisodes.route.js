const { Router } = require("express");
const { getLatestExpisodes, getSingleLatestExpisode, 
    createLatestEpisode, deleteLatestExpisode } = require("../controllers/latestEpisode.controller");
const isAuth = require("../middlewares/isAuth");
const router = Router();


router.get("/episode/latest", getLatestExpisodes);
router.get("/episode/latest/:id", getSingleLatestExpisode);
router.post("/episode/latest", isAuth, createLatestEpisode);
// router.put("/episode/latest/:id", editLatestExpisode);
router.delete("/episode/latest/:id", isAuth, deleteLatestExpisode);

module.exports = router;
