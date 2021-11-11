const express = require("express");
const bodyParser = require("body-parser");
var connection = require("express-myconnection");
var mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

app.use(
  connection(
    mysql,
    {
      host: "localhost", //'localhost',
      user: "root",
      password: "password",
      port: 3310, //port mysql
      database: "concerts",
    },
    "pool"
  )
); //or single

app.post("/add_user", (req, res) => {
  let { id, name, surname, username, password, email, role } = req.body;

  if (!name) return res.status(400).json("Book Name cant be blank");
  if (!surname) return res.status(400).json("Author cant be blank");

  var data = {
    id: id,
    name: name,
    surname: surname,
    username: username,
    password: password,
    email: email,
    role: role,
  };

  var query = connection.query(
    "INSERT INTO users set ? ",
    data,
    function (err, rows) {
      if (err) {
        //If error
        res.status(400).json("Sorry!!Unable To Add");
        console.log("Error inserting : %s ", err);
      } else {
        res.status(200).json("Book Added Successfully!!");
      }
    }
  );
});

app.listen(3000, () => {
  console.log(`app is running on port 3000`);
});
