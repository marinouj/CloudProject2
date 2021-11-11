import React, { useState, useEffect } from "react";

const Menu = (admin, organizer, user) => {
  return (
    <div class=" w-full h-9/10 flex justify-start z-10 backdrop-filter backdrop-blur-sm">
      <ul class="z-30 bg-gray w-48 text-white space-y-2 px-4">
        <li class="active">
          <a href="/concerts" class="links">
            Concerts
          </a>
        </li>
        <li>
          <a href="/users" class="links">
            Users
          </a>
        </li>
        <li>
          <a href="/favorites" class="links">
            Favorites
          </a>
        </li>
        <li>
          <a href="/myconcerts" class="links">
            Organizer Concerts
          </a>
        </li>
        <li>
          <a href="/mainpage" class="links">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
