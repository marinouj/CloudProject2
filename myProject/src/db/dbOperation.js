const config = require("./dbConfig"),
  sql = require("mssql");

/** User Operations */
const getUsers = async () => {
  try {
    let pool = await sql.connect(config);
    let users = await pool.request().query("SELECT * from Users");
    return users;
  } catch (error) {
    return error;
  }
};

const verifyUser = async (name, password) => {
  try {
    let pool = await sql.connect(config);
    let users = pool
      .request()
      .query(
        `Select * from Users where Username = '${name}' and UserPassword = '${password}' `
      );
    return users;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user) => {
  try {
    let pool = await sql.connect(config);
    let users = pool.request().query(
      `Insert into Users (UserId, Firstname, Surname, Username, UserPassword, Email, UserRole, Confirmed) values 
        ('${user.id}','${user.name}','${user.surname}','${user.username}','${user.password}','${user.email}','${user.role}','0')`
    );
    return users;
  } catch (error) {
    console.log(error);
  }
};

const confirmUser = async (id) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(`UPDATE Users SET Confirmed='1' WHERE UserId='${id}';`);
    return users;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(`DELETE FROM Users WHERE UserId='${id}';`);
    return users;
  } catch (error) {
    return error;
  }
};
/** Concert Operations */
const getConcerts = async () => {
  try {
    let pool = await sql.connect(config);
    let users = await pool.request().query("SELECT * from Concerts");
    return users;
  } catch (error) {
    return error;
  }
};

const addConcert = async (concert) => {
  try {
    let pool = await sql.connect(config);
    let users = pool.request().query(
      `INSERT INTO Concerts (ConcertId, Title, ConcertDate, ArtistName, Category) VALUES 
        ('${concert.id}','${concert.title}','${concert.date}','${concert.artist}','${concert.category}')`
    );
    return users;
  } catch (error) {
    console.log(error);
  }
};

const deleteConcert = async (cid) => {
  try {
    let pool = await sql.connect(config);
    let res = await pool
      .request()
      .query(`DELETE FROM Concerts WHERE ConcertId='${cid}';`);
    return res;
  } catch (error) {
    return error;
  }
};

/** Favorite Operations */
const getFavorites = async (id) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(`SELECT * from Favorites WHERE UserId='${id}'`);
    return users;
  } catch (error) {
    return error;
  }
};

const getAllFavorites = async (id) => {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query(`SELECT * from Favorites`);
    return res;
  } catch (error) {
    return error;
  }
};

const addFavorite = async (fid, cid, uid) => {
  try {
    let pool = await sql.connect(config);
    let res = pool.request().query(
      `INSERT INTO Favorites (FavoriteId, ConcertId, UserId) VALUES 
        ('${fid}','${cid}','${uid}')`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteFavorite = async (id) => {
  try {
    let pool = await sql.connect(config);
    let res = await pool
      .request()
      .query(`DELETE FROM Favorites WHERE FavoriteId='${id}';`);
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUsers,
  createUser,
  verifyUser,
  confirmUser,
  deleteUser,
  getConcerts,
  addConcert,
  deleteConcert,
  getFavorites,
  getAllFavorites,
  addFavorite,
  deleteFavorite,
};
