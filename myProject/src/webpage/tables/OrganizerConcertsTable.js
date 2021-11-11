import React, { useState, useEffect } from "react";
import UserList from "./usersTable";
import * as concertActions from "../../actions/concertActions";

const addConcert = (concert) => {
  console.log(concert);

  concertActions
    .addConcert(concert)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};

const deleteConcert = (cid) => {
  concertActions
    .deleteConcert(cid)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};

function OrganizerConcertTable() {
  const [returnedData, setReturnedData] = useState([]);

  useEffect(() => {
    concertActions
      .loadConcerts()
      .then((newData) => setReturnedData(newData))
      .catch((error) => {
        alert("Loaading failed: " + error);
      });
  });

  return (
    <>
      <div class="w-full h-9/10 bg-light_gray">
        <div class="flex justify-center w-full text-black ">
          <button class="buttons h-12 mt-4">Add concert</button>
          <table class="mt-20 w-1/2 border border-purple h-auto">
            <thead>
              <tr>
                <th class="table_outline">Id</th>
                <th class="table_outline">Title</th>
                <th class="table_outline">Date</th>
                <th class="table_outline">Artist name</th>
                <th class="table_outline">Category</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {returnedData.map((concert) => {
                return (
                  <tr class="table_outline" key={concert.ConcertId}>
                    <td class="table_outline">{concert.ConcertId}</td>
                    <td class="table_outline">{concert.Title}</td>
                    <td class="table_outline">{concert.ConcertDate}</td>
                    <td class="table_outline">{concert.ArtistName}</td>
                    <td class="table_outline">{concert.Category}</td>
                    <td class="table_outline">
                      <button
                        class="buttons"
                        onClick={() => deleteConcert(concert.ConcertId)}
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
    </>
  );
}

export default OrganizerConcertTable;
