import React from 'react';
import loadMap from '../Functions/loadMap';

//import Header component
import Header from './Header';
//import Map component
import Map from './Map';
//import Sidebar component
import Sidebar from './Sidebar';

class App extends React.Component {
  state = {
    pageHeader: 'CartoDB map'
  };
  componentDidMount() {
    // timers, listeners...
    //load the map
    var map = loadMap();

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
        <Map id="map" />
      </div>
    );
  }
}

export default App;

//TODO you could use this, or it's hear as a model:
//<Header message={this.state.pageHeader} />
