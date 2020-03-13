import React, { Component, useCallback } from "react";

import axios from "axios";
import RecordsList from "./Recordslist";
import { Redirect, Link } from "react-router-dom";

export default class View extends Component {
  constructor(props) {
    super(props);
    // const token = sessionStorage.getItem("token");

    // // if (token === null) {
    // //   loggedIn = true;
    // // }
    this.logOut = this.logOut.bind(this);
    this.state = { users: [], loggedIn: false };
  }

  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      console.log("call user Feed");
    } else {
      this.setState({ loggedIn: true });
    }
    axios
      .get("http://localhost/reactcrud/list.php")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  usersList() {
    return this.state.users.map(function(object, i) {
      return <RecordsList obj={object} key={i} />;
    });
  }

  logOut() {
    sessionStorage.setItem("token", "");
    sessionStorage.clear();
  }

  render() {
    const asd = this.state.loggedIn;
    if (asd) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2 className="text-center">Users List</h2>
        <Link to={"/"} onClick={this.logOut} className="btn btn-primary">
          Logout
        </Link>
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}
