import React from 'react';
import loadMap from '../functions/loadMap';

//import Header component
import Header from './Header'
//import Map component
import Map from './Map'

class App extends React.Component {
  state = {
    pageHeader: 'CartoDB map'
  };
  componentDidMount() {
    // timers, listeners...
    //load the map
    var map = loadMap();
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <Map id="map" />
      </div>
    );
  }
}

export default App;
