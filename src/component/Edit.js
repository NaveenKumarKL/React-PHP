import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { Fname: "", Email: "", Password: "" };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost/reactcrud/getbyid.php?id=" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          Fname: response.data.fname,
          Email: response.data.uname,
          Password: response.data.password
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeFname(e) {
    this.setState({
      Fname: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Fname: this.state.Fname,
      Email: this.state.Email,
      Password: this.state.Password
    };
    axios
      .post(
        "http://localhost/reactcrud/update.php?id=" +
          this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="container">
        <h3>Edit user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>fullname</label>
            <input
              className="form-control"
              type="text"
              name="Fname"
              value={this.state.Fname}
              onChange={this.onChangeFname}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="Email"
              value={this.state.Email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="Password"
              value={this.state.Password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update" className="btn  btn-info" />
          </div>
        </form>
      </div>
    );
  }
}
