const loadUsers = async () => {
  const newData = await fetch("/loadUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

const verifyUser = async (user) => {
  const newData = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({ name: user.username, password: user.password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

const createUser = async (user) => {
  const newData = await fetch("/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...user }),
  }).then((res) => res.json());
  return newData;
};

const confirmUser = async (id) => {
  const newData = await fetch("/confirmUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ id: id }),
  }).then((res) => res.json());
  console.log(newData);
  return newData;
};

const deleteUser = async (id) => {
  const newData = await fetch("/deleteUser", {
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

module.exports = { loadUsers, verifyUser, createUser, confirmUser, deleteUser };
