import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as userActions from "../../actions/userActions";

const deleteUser = (id) => {
  console.log(id);
  userActions
    .deleteUser(id)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};

const confirmUser = (id) => {
  console.log(id);
  userActions
    .confirmUser(id)
    .then((newData) => console.log(newData))
    .catch((error) => {
      alert("Loading failed: " + error);
    });
};

const UserList = () => {
  const [returnedData, setReturnedData] = useState([]);

  useEffect(() => {
    userActions
      .loadUsers()
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
              <th class="table_outline">Name</th>
              <th class="table_outline">Surname</th>
              <th class="table_outline">Username</th>
              <th class="table_outline">Email</th>
              <th class="table_outline">Role</th>
              <th class="table_outline">Confirmed</th>
              <th class="table_outline">Delete</th>
            </tr>
          </thead>
          <tbody>
            {returnedData.map((user) => {
              return (
                <tr class="table_outline" key={user.UserId}>
                  <td class="table_outline">{user.UserId}</td>
                  <td class="table_outline">{user.Firstname}</td>
                  <td class="table_outline">{user.Surname}</td>
                  <td class="table_outline">{user.Username}</td>
                  <td class="table_outline">{user.Email}</td>
                  <td class="table_outline">{user.UserRole}</td>
                  <td class="table_outline">
                    {user.Confirmed ? (
                      "Confirmed"
                    ) : (
                      <button
                        class="buttons"
                        onClick={() => confirmUser(user.UserId)}
                      >
                        confirm
                      </button>
                    )}
                  </td>
                  <td class="table_outline">
                    <button
                      class="buttons"
                      onClick={() => deleteUser(user.UserId)}
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

export default UserList;
