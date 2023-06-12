const {v4: uuid} = require("uuid");

class Teacher {
  constructor(name, image, field) {
    this.id = uuid();
    this.name = name;
    this.image = image;
    this.field = field;
  }
}

module.exports = Teacher;
