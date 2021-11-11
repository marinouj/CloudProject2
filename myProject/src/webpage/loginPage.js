import React, { useState } from "react";
import propTypes from "prop-types";
import * as userActions from "../actions/userActions";
import { modifyUser } from "../App";

export default function LoginPage() {
  const [user, setUser] = useState({
    userinfo: { username: "", password: "" },
  });

  function handleUser(user, event) {
    if (user.length === 1) {
      console.log(user);
      document.getElementById("wrong_data").classList.add("hidden");
      localStorage.setItem("user", JSON.stringify(user[0]));
      window.location.assign("/mainpage");
    } else {
      console.log("Wrong password");
      document.getElementById("wrong_data").classList.remove("hidden");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, userinfo: { ...user.userinfo, [name]: value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    userActions
      .verifyUser(user.userinfo)
      .then((res) => handleUser(res, event))
      .catch((error) => {
        alert("Login failed: " + error);
      });
  }

  return (
    <div class="basic_page flex justify-center items-center">
      <div class="w-full max-w-xs">
        <form onSubmit={handleSubmit} class="form_theme">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              name="username"
              label="username"
              class="input_fields"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              name="password"
              label="password"
              class="  input_fields"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div id="wrong_data" class="text-red-500 text-xs hidden mb-3">
            Wrong username or password
          </div>
          <div class="flex items-center justify-between">
            <button class="buttons" type="submit" value="Login">
              Sign In
            </button>
            <a href="/register" class="buttons" type="button">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
