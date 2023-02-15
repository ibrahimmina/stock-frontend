import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className="form-control"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
            />
            <small id="nameHelp" className="form-text text-muted">
              Tell us your name
            </small>
          </div>

          <div className="form-group">
            <label for="email">Email address</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="password_confirmation">Confirm Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password_confirmation}
              error={errors.password_confirmation}
              id="password_confirmation"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
