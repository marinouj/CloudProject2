import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./webpage/common/header";
import LoginPage from "./webpage/loginPage";
import PageNotFound from "./webpage/common/pageNotFound";
import ManageRegister from "./webpage/manageRegister";
import ConcertTable from "./webpage/tables/ConcertTable";
import MainPage from "./webpage/common/mainPage";
import UserList from "./webpage/tables/usersTable";
import FavoritesList from "./webpage/tables/favoritesTable";
import OrganizerConcertTable from "./webpage/tables/OrganizerConcertsTable";
import Menu from "./webpage/common/menu";
export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [organizer, setOrganizer] = useState(false);
  const [simpleUser, setSimpleUser] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser) {
        setLoggedIn(true);
        if (foundUser.UserRole === "Admin") {
          setAdmin(true);
          setOrganizer(false);
          setSimpleUser(false);
        } else if (foundUser.UserRole === "Event Organizer") {
          setOrganizer(true);
          setAdmin(false);
          setSimpleUser(false);
        } else {
          setAdmin(false);
          setOrganizer(false);
          setSimpleUser(true);
        }
      } else {
        setAdmin(false);
        setOrganizer(false);
        setSimpleUser(false);
        setLoggedIn(false);
      }
    } else {
      setAdmin(false);
      setOrganizer(false);
      setSimpleUser(false);
      setLoggedIn(false);
    }
  });

  return (
    <BrowserRouter class="h-screen">
      <div class="container-fluid h-screen">
        <Header
          class="h-1/10 w-screen"
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <div class="fixed z-30 hidden mobile-menu h-full w-full">
          <Menu />
        </div>
        <Switch class="h-4/5 w-screen">
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={ManageRegister} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/users" component={admin ? UserList : LoginPage} />
          <Route
            path="/concerts"
            component={loggedIn ? ConcertTable : LoginPage}
          />
          <Route
            path="/myconcerts"
            component={organizer ? OrganizerConcertTable : LoginPage}
          />
          <Route path="/favorites" component={FavoritesList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
