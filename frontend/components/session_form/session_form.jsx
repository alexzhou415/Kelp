import React from "react";
import logo from "../../../app/assets/images/logo_transparent.png";
import { Link } from "react-router-dom";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      location: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    if (this.props.formType === "Demo") this.props.submitForm(this.props.user);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  displayErrors() {
    return this.props.errors.map((error, i) => {
      <li key={i}>{error}</li>;
    });
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let switchMsg = "New to Kelp?";
    let prompt = "Log in to Kelp";
    let usernameField = "";
    let locationField = "";
    let breaks;
    if (this.props.formType === "Sign Up") {
      switchMsg = "Already on Kelp?";
      prompt = "Sign up for Kelp";
      breaks = <br/>;
      usernameField = (
        <label className="login-field-label">Username
          <br />
          <input
            type="text"
            onChange={this.handleInput("username")}
            value={this.state.username}
            className="login-input"
          />
        </label>
      );
      locationField = (
        <div>
          <label className="login-field-label">Location
            <br />
            <input
              type="text"
              onChange={this.handleInput("location")}
              value={this.state.location}
              className="login-input"
            />
          </label>
        </div>
      );
    }
    return (
      <div className="login-page-container">
        <div className="login-logo-container">
          <Link to="/" className="login-logo-link">
            <img className="login-logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="login-box">
          <div className="login-errors-box">
            <ul>{this.renderErrors()}</ul>
          </div>
          <h2 className="login-prompt">{prompt}</h2>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              {usernameField}
              {breaks}
              <label className="login-field-label">
                Email
                <br />
                <input
                  type="text"
                  onChange={this.handleInput("email")}
                  value={this.state.email}
                  className="login-input"
                />
              </label>
              <br />
              <label className="login-field-label">
                Password
                <br />
                <input
                  type="password"
                  onChange={this.handleInput("password")}
                  value={this.state.password}
                  className="login-input"
                />
              </label>
              <br />
              {locationField}
              {breaks}
              <button type="submit" className="session-submit">
                {this.props.formType}
              </button>
            </div>
          </form>
          <div className="switch-forms"></div>
          <div className="switch-message">
            {switchMsg} {this.props.link}
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
