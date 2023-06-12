const auth = require("./auth.route");
const home = require("./home.route");
const latesEpisode = require("./latestEpisodes.route");
const trendingEpisode = require("./trendingEpisodes");
const topic = require("./topic.route");
const teacher = require("./teacher.route");

module.exports = [auth, home, teacher, latesEpisode, trendingEpisode, topic];
