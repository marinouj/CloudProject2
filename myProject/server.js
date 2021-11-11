const Db = require("./src/db/dbOperation"),
  express = require("express"),
  cors = require("cors");
const app = express();
//var router = express.Router();

const API_PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

/**  User related server actions */
app.post("/login", async (req, res) => {
  const result = await Db.verifyUser(req.body.name, req.body.password);
  res.send(result.recordset);
});

app.post("/createUser", async (req, res) => {
  const result = await Db.createUser(req.body);
  res.send(result);
});

app.post("/loadUsers", async (req, res) => {
  const result = await Db.getUsers();
  res.send(result.recordset);
});

app.post("/confirmUser", async (req, res) => {
  const result = await Db.confirmUser(req.body.id);
  res.send(result);
});

app.post("/deleteUser", async (req, res) => {
  const result = await Db.deleteUser(req.body.id);
  res.send(result);
});

/**  Concert related server actions */
app.get("/loadConcerts", async (req, res) => {
  const result = await Db.getConcerts();
  res.send(result.recordset);
});

app.post("/addConcert", async (req, res) => {
  const result = await Db.addConcert(req.body.concert);
  res.send(result.recordset);
});

app.post("/deleteConcert", async (req, res) => {
  const result = await Db.deleteConcert(req.body.cid);
  res.send(result);
});

/**  Favorites related server actions */
app.post("/addFavorite", async (req, res) => {
  const result = await Db.addFavorite(req.body.fid, req.body.cid, req.body.uid);
  res.send(result);
});

app.post("/loadFavorites", async (req, res) => {
  const result = await Db.getFavorites(req.body.id);
  res.send(result.recordset);
});

app.post("/loadAllFavorites", async (req, res) => {
  const result = await Db.getAllFavorites();
  res.send(result.recordset);
});

app.post("/deleteFavorite", async (req, res) => {
  const result = await Db.deleteFavorite(req.body.id);
  res.send(result);
});

app.listen(API_PORT, () => console.log("Order API is runnning at " + API_PORT));
