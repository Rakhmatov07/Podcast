const {v4: uuid} = require("uuid");

class Episode{
    constructor(type, author, field, description, image, profileimg, listenned, likes, comments){
        this.id = uuid();
        this.type = type;
        this.author = author;
        this.field = field;
        this.description = description;
        this.image = image;
        this.profileimg = profileimg;
        this.listenned = listenned;
        this.likes = likes;
        this.comments = comments;
        this.createdAt = new Date();
    }

    latest (minutes, episodes, downloads) {
        return {id: this.id, minutes, episodes, author: this.author, field: this.field, image: this.image,
           description: this.description, listenned: this.listenned, likes: this.likes, 
           comments: this.comments, profileimg: this.profileimg, downloads, createdAt: this.createdAt};
    }

    trending () {
        return {id: this.id, author: this.author, field: this.field, description: this.description, image: this.image,
            profileimg: this.profileimg, listenned: this.listenned, likes: this.likes, comments: this.comments, createdAt: this.createdAt};
    }
}

module.exports = Episode;