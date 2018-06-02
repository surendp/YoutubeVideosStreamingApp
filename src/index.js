import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyB75N8g15-Mo4jmGohuTDk69oJDZA59WHE';


// Create main component of the applicaion. This component renders
// other child components required to build hte application
class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
      this.setState({ videos });
    });
  }

  render(){
    return(
       <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
       </div>
    )
  }

}


// Render the HTML created by the Component to the page
ReactDOM.render(
  <App />,
  document.querySelector(".container")
)
