import React from "react";
import RegisterPage from "./registerPage";
import * as userActions from "../actions/userActions";

class ManageRegister extends React.Component {
  state = {
    user: {
      id: "",
      name: "",
      surname: "",
      username: "",
      password: "",
      email: "",
      role: "",
    },
  };

  updateInfo = (event) => {
    const { name, value } = event.target;
    const user = { ...this.state.user, [name]: value };
    this.setState({ user });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    userActions
      .loadUsers()
      .then((newData) => {
        const uid = Math.max(...newData.map((a) => a.UserId)) + 1;
        this.state.user.id = uid;
        console.log(this.state.user);
        userActions
          .createUser(this.state.user)
          .then((res) => {
            console.log(res);
            window.location.assign("../");
          })
          .catch((error) => {
            alert("Register failed: " + error);
          });
      })
      .catch((error) => {
        alert("Register failed: " + error);
      });
  };

  render() {
    return (
      <RegisterPage
        user={this.state.user}
        onSubmit={this.handleSubmit}
        onChange={this.updateInfo}
      />
    );
  }
}

export default ManageRegister;
