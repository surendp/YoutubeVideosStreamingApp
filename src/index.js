import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyB75N8g15-Mo4jmGohuTDk69oJDZA59WHE';


// Create main component of the applicaion. This component renders
// other child components required to build hte application
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');

    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  onVideoSelect(video){
    this.setState({selectedVideo: video});
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return(
       <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList videos={this.state.videos}
                    onVideoSelect = {this.onVideoSelect}/>
       </div>
    )
  }

}


// Render the HTML created by the Component to the page
ReactDOM.render(
  <App />,
  document.querySelector(".container")
)
