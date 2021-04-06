import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      location: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleInput(field){
    return(
      (e) => this.setState({[field]: e.target.value})
    )
  }

  displayErrors(){
    return (
      this.props.errors.map((error, i) => {
        <li key={i}>
          {error}
        </li>
      })
    )
  }

  render(){
    let switchMsg = 'New to Kelp?';
    let prompt = 'Log in to Kelp';
    let usernameField = '';
    let locationField = '';
    if (this.props.formType === 'Sign Up') {
      switchMsg = "Already on Kelp?";
      prompt = 'Sign up for Kelp';
      usernameField = (
        <label>
          Username
          <input
            type="text"
            onChange={this.handleInput("username")}
            value={this.state.username}
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
          />
        </label>
      );
    }
    return (
      <div>
        <ul>{this.displayErrors()}</ul>
        <header>{prompt}</header>
        <form onSubmit={this.handleSubmit}>
          {usernameField}
          <br />
          <label>
            Email
            <input
              type="text"
              onChange={this.handleInput("email")}
              value={this.state.email}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              onChange={this.handleInput("password")}
              value={this.state.password}
            />
          </label>
          <br />
          {locationField}
          <br />
          <button type="submit">{this.props.formType}</button>
        </form>
        <div>
          {switchMsg} {this.props.link}
        </div>
      </div>
    );
  }
}

export default SessionForm;