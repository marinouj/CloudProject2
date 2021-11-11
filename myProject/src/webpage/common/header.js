import React, { useState, useEffect } from "react";

const Header = (loggedIn, setLoggedIn) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedIn) {
      const foundUser = JSON.parse(loggedInUser);
      foundUser ? setUsername(foundUser.Username) : setUsername("");
    } else {
      setUsername("");
    }
  });

  const logout = () => {
    localStorage.setItem("user", JSON.stringify(null));
    //const loggedInUser = localStorage.getItem("user");
    //console.log(loggedInUser);
    window.location.assign("../");
  };

  return (
    <div class="flex flex-row justify-evenly items-center bg-gray h-1/10 w-full text-white">
      <button class="text-purple text-4xl font-bold">
        <svg
          class=" w-6 h-6 text-white hover:text-purple "
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            document.querySelector(".mobile-menu").classList.toggle("hidden");
          }}
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div class="text-purple text-4xl font-bold">CONCERTS</div>
      <div class="text-white">User: {username}</div>
      <div class="links" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Header;
