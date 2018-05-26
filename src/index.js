
import React from 'react';
import ReactDOM from 'react-dom';

// Create main component of the applicaion. This component renders
// other child components required to build hte application
const App = () => {
  return <div>Hello everyone!!</div>
}


// Render the HTML created by the Component to the page
ReactDOM.render(
  <App />,
  document.querySelector(".container")
)
