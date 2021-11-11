import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as actions from "../../actions/favoritesActions";

const deleteFavorite = (id) => {
  console.log(id);
  actions
    .deleteFavotite(id)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};
/*
const confirmUser = (id) => {
  console.log(id);
  userActions
    .confirmUser(id)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};
*/
//TODO Add
const FavoritesList = () => {
  const [returnedData, setReturnedData] = useState([]);

  useEffect(() => {
    actions
      .LoadFavorites("1")
      .then((newData) => setReturnedData(newData))
      .catch((error) => {
        alert("Loading failed: " + error);
      });
  });

  return (
    <div class="w-full h-9/10 bg-light_gray">
      <div class="flex justify-center w-full text-black ">
        <table class="mt-20 w-1/2 border border-purple h-auto">
          <thead>
            <tr>
              <th class="table_outline">Id</th>
              <th class="table_outline">ConcertId</th>
              <th class="table_outline">Delete</th>
            </tr>
          </thead>
          <tbody>
            {returnedData.map((concert) => {
              return (
                <tr class="table_outline" key={concert.FavoriteId}>
                  <td class="table_outline">{concert.FavoriteId}</td>
                  <td class="table_outline">{concert.ConcertId}</td>
                  <td class="table_outline">
                    <button
                      class="buttons"
                      onClick={() => deleteFavorite(concert.FavoriteId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritesList;
