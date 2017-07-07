import React from 'react';
import ReactDOM from 'react-dom';
import loadMap from './functions/loadMap';

//get the app from its component location
import App from './components/App';

//build the webpage using app
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//load the map
var map = loadMap();
