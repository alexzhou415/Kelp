import React from 'react';

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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  componentDidMount(){
    if (this.props.formType === 'Demo') this.props.submitForm(this.props.user);
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let switchMsg = "New to Kelp?";
    let prompt = "Log in to Kelp";
    let usernameField = "";
    let locationField = "";
    if (this.props.formType === "Sign Up") {
      switchMsg = "Already on Kelp?";
      prompt = "Sign up for Kelp";
      usernameField = (
        <label>
          Username
          <input
            type="text"
            onChange={this.handleInput("username")}
            value={this.state.username}
            className="login-input"
          />
        </label>
      );
      locationField = (
        <label>
          Location
          <input
            type="text"
            onChange={this.handleInput("location")}
            value={this.state.location}
            className="login-input"
          />
        </label>
      );
    }
    return (
      <div className="login-form-container">
        {/* <ul>{this.displayErrors()}</ul> */}
        {this.renderErrors()}
        <h2 className="login-prompt">{prompt}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            {usernameField}
            <br />
            <label>
              Email
              <input
                type="text"
                onChange={this.handleInput("email")}
                value={this.state.email}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password
              <input
                type="password"
                onChange={this.handleInput("password")}
                value={this.state.password}
                className="login-input"
              />
            </label>
            <br />
            {locationField}
            <br />
            <button type="submit" className="session-submit">
              {this.props.formType}
            </button>
          </div>
        </form>
        <div className="switch-message">
          {switchMsg} {this.props.link}
        </div>
      </div>
    );
  }
}

export default SessionForm;