const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Teacher = require("../models/Teacher");
const path = require("path");

const create = async (req, res) => {
  const {name, field} = req.body;
  const {image} = req.files;

  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTeacher = new Teacher(name, imageName, field);

  const teachers = await Teachers.read();

  const data = teachers.length ? [...teachers, newTeacher] : [newTeacher];

  await Teachers.write(data);

  res.status(201).json({message: "Created"});
};

module.exports = {
  create,
};
