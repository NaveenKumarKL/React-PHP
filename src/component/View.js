import React, { Component } from "react";
import axios from "axios";
import RecordsList from "./Recordslist";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
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

  render() {
    return (
      <div>
        <p>users List</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>full name</th>
              <th>Email</th>
              <th>password</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}
