
import React from 'react';
import ReactDOM from 'react-dom';

// import the search bar component
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyB75N8g15-Mo4jmGohuTDk69oJDZA59WHE';

// Create main component of the applicaion. This component renders
// other child components required to build hte application
const App = () => {
  return(
     <div>
        <SearchBar />
     </div>
  )
}


// Render the HTML created by the Component to the page
ReactDOM.render(
  <App />,
  document.querySelector(".container")
)
