import React from 'react';
import {Link} from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state={searchwords: '', searchquery: ''};

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    const query = e.target.value.split(' ').join("%");
    this.setState({searchquery: query, searchwords: e.target.value});
  }

  render(){
    return (
      <div className="search-bar-container">
          <input type="text" placeholder="Search for businesses" className="search-bar-input" onChange={this.handleInput} value={this.state.searchwords}/>
          <Link to={{
            pathname: '/search',
            search: `${this.state.searchquery}`
          }}>
            <button className="search-bar-submit" type="submit">Search</button>
          </Link>
      </div>
    );
  }
}

export default Search;