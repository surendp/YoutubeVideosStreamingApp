/*
* create a search bar component which returns an input field
* Make the component available to other modules
*/

import React from 'react';

// search bar controlled component
class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state ={term: ''};
  }

  render(){
    return(
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
      </div>
    )
  }
}

// export the component
export default SearchBar;
