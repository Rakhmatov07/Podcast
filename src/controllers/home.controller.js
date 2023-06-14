const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const LatestEpisodes = new Io("./database/latestepisodes.json");
const TrendingEpisodes = new Io("./database/trendingepisodes.json");
const Topics = new Io("./database/topics.json");

const home = async (req, res) => {
  const teachers = await Teachers.read();
  const latestEpisodes = await LatestEpisodes.read();
  const trendingEpisodes = await TrendingEpisodes.read();
  const topics = await Topics.read();


  res.render("index", {
    teachers,
    latestEpisodes,
    trendingEpisodes,
    topics
  });
};

const detailPage = async (req, res) => {
  res.render("detail-page");
};

const listingPage = async (req, res) => {
  res.render("listing-page");
};

const adminPage = async (req, res) => {
  const teachers = await Teachers.read();
  const latestEpisodes = await LatestEpisodes.read();
  const trendingEpisodes = await TrendingEpisodes.read();
  const topics = await Topics.read();


  res.render("admin", {
    teachers,
    latestEpisodes,
    trendingEpisodes,
    topics
  });
};

const addingPage = async(req, res) => {
  res.render("add");
};

const deletingPage = async(req, res) => {
  res.render("delete");
};


module.exports = {
  home,
  detailPage,
  adminPage,
  listingPage,
  addingPage,
  deletingPage
};
