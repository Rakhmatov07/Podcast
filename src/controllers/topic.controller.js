const { v4: uuid } = require("uuid");
const IO = require("../utils/io");
const Topics = new IO("./database/topics.json");
const Topic = require("../models/Topic");
const path = require("path");
const fs = require("fs");

const getTopics = async(req, res) => {
    const data = await Topics.read();
    return res.status(200).json({message: "Success", data});
}

const getSingleTopic = async(req, res) => {
    const topics = await Topics.read();
    const { id } = req.params;
    const findTopic = topics.find((topic) => topic.id === id);
    if(!findTopic){
        return res.status(404).json({message: "Not Found"});
    }

    res.status(200).json({message: "Success", findTopic});
}

const createTopic = async(req, res) => {
        // Read elements and inputs
    const topics = await Topics.read();
    const { name, episodes } = req.body;
    const { image } = req.files;
    const imageName = `${uuid()}${path.extname(image.name)}`;
    
    // Create new Topic
    const newTopic = new Topic(name, episodes, imageName);
    const findTopic = topics.find(topic => topic.name === name && topic.episodes === episodes);
    if(findTopic){
        return res.status(201).json({message: "Created"});
    }
    
    image.mv(process.cwd() + '/uploads/' + imageName);
    const data = topics.length ? [...topics, newTopic] : [newTopic];
    await Topics.write(data);
    res.status(201).json({message: "Created"});
}

const deleteTopic = async(req, res) => {
        // Read elements
    const topics = await Topics.read();
    const { id } = req.params;
    const deletedTopic = topics.find(topic => topic.id === id);
    const findTopics = topics.filter(topic => topic.id !== id);
    const filePath = `/uploads/${deletedTopic.image}`;
    fs.unlink(process.cwd() + filePath, (error) => {
        if (error) {
            console.error('Error deleting file:', error);
          } else {
            console.log('File deleted successfully');
          }
    });
    await Topics.write(findTopics);
    res.status(200).json({message: "Success"});
}


module.exports = {
    getTopics,
    getSingleTopic,
    createTopic,
    deleteTopic
}