const { v4: uuid } = require("uuid");
const IO = require("../utils/io");
const LatestEpisodes = new IO("./database/latestepisodes.json");
const Episode = require("../models/episode.js");
const path = require("path");
const fs = require("fs");

const getLatestExpisodes = async(req, res) => {
    const data = await LatestEpisodes.read();
    return res.status(200).json({message: "Success", data});
}

const getSingleLatestExpisode = async(req, res) => {
    const episodes = await LatestEpisodes.read();
    const { id } = req.params;
    const findEpisode = episodes.find((episode) => episode.id === id);
    if(!findEpisode){
        return res.status(404).json({message: "Not Found"});
    }

    res.status(200).json({message: "Success", findEpisode});
}

const createLatestEpisode = async(req, res) => {
        // Read elements and inputs
    const episodess = await LatestEpisodes.read();
    const { type, author, field, description, minutes, episodes } = req.body;
    const { image, profileimg } = req.files;
    const imageName = `${uuid()}${path.extname(image.name)}`;
    const profileimgName = `${uuid()}${path.extname(profileimg.name)}`;
    
        // Create new Episode
    const newEpisode = (new Episode(type, author, field, description, imageName, profileimgName)).latest(minutes, episodes);
    const findEpisode = episodess.find((data) => data.type === type);
    // console.log(findEpisode);
    if(findEpisode){
        return res.status(201).json({message: "Created"});
    }
    
    image.mv(process.cwd() + '/uploads/' + imageName);
    profileimg.mv(process.cwd() + '/uploads/' + profileimgName);
    const data = episodess.length ? [...episodess, newEpisode] : [newEpisode];
    await LatestEpisodes.write(data);
    res.status(201).json({message: "Created"});
}

const deleteLatestExpisode = async(req, res) => {
        // Read elements
    const episodes = await LatestEpisodes.read();
    const { id } = req.body;
    const deletedEpisode = episodes.find(episode => episode.id === id);
    const findEpisodes = episodes.filter(episode => episode.id !== id);
    const filePath = `/uploads/${deletedEpisode.image}`;
    fs.unlink(process.cwd() + filePath, (error) => {
        if (error) {
            console.error('Error deleting file:', error);
          } else {
            console.log('File deleted successfully');
          }
    });
    const filePath1 = `/uploads/${deletedEpisode.profileimg}`;
    fs.unlink(process.cwd() + filePath1, (error) => {
        if (error) {
            console.error('Error deleting file:', error);
          } else {
            console.log('File deleted successfully');
          }
    });
    await LatestEpisodes.write(findEpisodes);
    res.redirect("/delete");
}


module.exports = {
    getLatestExpisodes,
    getSingleLatestExpisode,
    createLatestEpisode,
    deleteLatestExpisode,
}