const loadConcerts = async () => {
  const newData = await fetch("/loadConcerts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

const addConcert = async (concert) => {
  const newData = await fetch("/addConcert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...concert }),
  }).then((res) => res.json());
  console.log(newData[0]);
  return newData;
};

const deleteConcert = async (cid) => {
  const newData = await fetch("/deleteConcert", {
    method: "POST",
    body: JSON.stringify({ cid: cid }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return newData;
};

module.exports = { loadConcerts, deleteConcert };
