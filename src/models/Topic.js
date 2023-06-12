const {v4: uuid} = require("uuid");

class Topic{
    constructor(name, episodes, image){
        this.id = uuid();
        this.name = name;
        this.episodes = episodes;
        this.image = image
        this.createdAt = new Date();
    }
}

module.exports = Topic;