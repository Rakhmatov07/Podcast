require("dotenv/config");
const express = require("express");
const router = require("./routes");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie());
app.use(fileUpload());

app.use(express.static(process.cwd() + "/src/public"));
app.use(express.static(process.cwd() + "/uploads"));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
