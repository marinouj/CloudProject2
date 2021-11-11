import React, { useState, useEffect } from "react";
import * as actions from "../../actions/favoritesActions";
import * as concertActions from "../../actions/concertActions";

const addToFavorites = (concertId, userId) => {
  actions
    .loadAllFavorites()
    .then((res) => {
      console.log(res);
      const favId = Math.max(...res.map((a) => a.FavoriteId)) + 1;
      actions
        .addFavotite(favId, concertId, userId)
        .then()
        .catch((error) => {
          alert("Add to favorites failed: " + error);
        });
    })
    .catch((error) => {
      alert("Add to favorites failed: " + error);
    });
};

function ConcertTable() {
  const [returnedData, setReturnedData] = useState([]);
  const [favoriteConcerts, setFavotiteConcerts] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(loggedInUser.UserId);
    concertActions
      .loadConcerts()
      .then((newData) => {
        setReturnedData(newData);
      })
      .catch((error) => {
        alert("Loading concerts failed: " + error);
      });
    actions
      .LoadFavorites(loggedInUser.UserId)
      .then((res) => {
        setFavotiteConcerts(res.map((a) => a.ConcertId));
      })
      .catch((error) => {
        alert("Loading favorites of current user failed: " + error);
      });
  });

  //render() {
  return (
    <>
      <div class="w-full h-9/10 bg-light_gray">
        <div class="flex justify-center w-full text-black ">
          <table class="mt-20 w-1/2 border border-purple h-auto">
            <thead>
              <tr>
                <th />
                <th class="table_outline">Id</th>
                <th class="table_outline">Title</th>
                <th class="table_outline">Date</th>
                <th class="table_outline">Artist name</th>
                <th class="table_outline">Category</th>
              </tr>
            </thead>
            <tbody>
              {returnedData.map((concert) => {
                return (
                  <tr class="table_outline" key={concert.ConcertId}>
                    <td class="table_outline">
                      <div class="text-purple text-xl">
                        {favoriteConcerts.includes(concert.ConcertId) ? (
                          <div>&#9733;</div>
                        ) : (
                          <button
                            class="buttons"
                            onClick={() =>
                              addToFavorites(
                                concert.ConcertId,
                                loggedInUser.UserId
                              )
                            }
                          >
                            &#9734;
                          </button>
                        )}
                      </div>
                    </td>
                    <td class="table_outline">{concert.ConcertId}</td>
                    <td class="table_outline">{concert.Title}</td>
                    <td class="table_outline">{concert.ConcertDate}</td>
                    <td class="table_outline">{concert.ArtistName}</td>
                    <td class="table_outline">{concert.Category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ConcertTable;
