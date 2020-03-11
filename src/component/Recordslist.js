import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class RecordsList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      redirect: false
    };
  }

  delete() {
    axios
      .get("http://localhost/reactcrud/delete.php?id=" + this.props.obj.id)
      .then(this.setState({ redirect: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/view" />;
    }
    return (
      <tr>
        <td> {this.props.obj.id}</td>
        <td> {this.props.obj.Fname}</td>
        <td> {this.props.obj.Email}</td>
        <td> {this.props.obj.Password}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            delete
          </button>
        </td>
      </tr>
    );
  }
}
