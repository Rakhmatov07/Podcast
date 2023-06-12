const { Router } = require("express");
const { getTopics, getSingleTopic, createTopic, deleteTopic } = require('../controllers/topic.controller');
const isAuth = require("../middlewares/isAuth");
const router = Router();


router.get("/topic", getTopics);
router.get("/topic/:id", getSingleTopic);
router.post("/topic", isAuth, createTopic);
// router.put("/topic/:id", editTopic);
router.delete("/topic/:id", isAuth, deleteTopic);

module.exports = router;