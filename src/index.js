import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyASmFcxp0E7yKABNeGzlgIdFGXcNpCpTXM';




// Create a new component. This component produces HTML
const App = () => {
  return <div> Hello World </div>;
}

// Specify that react will put the component's
// generated HTML in the DOM
// Select an instance of the App class
 // and specify where in the DOM you want to render this
ReactDOM.render(<App />, document.querySelector('.container'));
