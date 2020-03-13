import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class login extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Email: "",
      Password: "",
      loggedin: false
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // const { Email, Password } = this.state;
    const obj = {
      Email: this.state.Email,
      Password: this.state.Password
    };

    axios.post("http://localhost/reactcrud/login.php", obj).then(res => {
      let team = res.data;
      if (team === 1) {
        sessionStorage.setItem("token", "asasddasdsadadasasd12");
        this.setState({ loggedin: true });
      } else {
        alert("please enter correct password");
      }
    });
  }
  s;

  render() {
    const { loggedin } = this.state;
    if (loggedin) {
      return <Redirect to="/view" />;
    }
    if (sessionStorage.getItem("token")) {
      return <Redirect to="/view" />;
    }
    return (
      <div className="col-6 container login">
        <h2>Login User</h2>
        <form>
          <label>username</label>
          <input
            type="Email"
            name="Email"
            placeholder="Email"
            className="form-control"
            value={this.state.Email}
            onChange={this.onChange}
          />
          <div className="form-group">
            <label>password</label>
            <input
              className="form-control"
              type="password"
              name="Password"
              placeholder="password"
              value={this.state.Password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              onClick={this.onSubmit}
              type="submit"
              value="login"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
