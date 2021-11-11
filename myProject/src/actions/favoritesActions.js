const LoadFavorites = async (id) => {
  const newData = await fetch("/loadFavorites", {
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

const loadAllFavorites = async () => {
  const newData = await fetch("/loadAllFavorites", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

const addFavotite = async (fid, cid, uid) => {
  const newData = await fetch("/addFavorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ fid: fid, cid: cid, uid: uid }),
  }).then((res) => res.json());
  return newData;
};

const deleteFavotite = async (id) => {
  const newData = await fetch("/deleteFavorite", {
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

module.exports = {
  LoadFavorites,
  loadAllFavorites,
  addFavotite,
  deleteFavotite,
};
