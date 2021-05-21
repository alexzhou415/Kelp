import React from 'react';
import { Link } from "react-router-dom";

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render(){
    // console.log("profile");
    // console.log(this.props);
    if (!this.props.user) return null;
    return (
      <div className="profile-container">
        <div className="profile-username">{this.props.user.username}</div>
      </div>
    )
  }
  
}

export default Profile;