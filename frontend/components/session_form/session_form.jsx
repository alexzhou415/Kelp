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

  }

  render(){
    let switchMsg = 'New to Kelp?';
    let prompt = 'Log in to Kelp';
    if (this.props.formType === 'Sign Up') {
      switchMsg = "Already on Kelp?";
      prompt = 'Sign up for Kelp'
    }
    return(
      <div>
        <header>
          {prompt}
        </header>
        <form onSubmit={this.handleSubmit}>
          
        </form>
        <div>{switchMsg} {this.props.link}</div>
      </div>
    )
  }
}

export default SessionForm;