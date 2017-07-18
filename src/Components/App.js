import React from 'react';

//import loadmap function to trigger carto methods
import loadMap from '../Functions/loadMap';

//import Header component
import Header from './Header';
//import Map component
import Map from './Map';
//import Sidebar component
import Sidebar from './Sidebar';
//import district filter component
import DistrictFilter from './DistrictFilter';

class App extends React.Component {
  state = {
    pageHeader: 'CartoDB map'
  };
  componentDidMount() {
    // timers, listeners...
    //load the map
    loadMap();

    //set up sidebar toggling
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div id="wrapper" className="App active">
        <Sidebar />
        <DistrictFilter />
        <Map id="map" />
      </div>
    );
  }
}

export default App;
