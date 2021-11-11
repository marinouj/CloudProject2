const config = {
  user: "ConcertDb",
  password: "123",
  server: "DESKTOP-OTES8U2",
  port: 3001, //port mysql
  database: "ConcertAppDb",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
};

module.exports = config;
