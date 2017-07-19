import React, { Component } from 'react';

class Map extends Component {
  render() {
    return(
      <div id={this.props.id}>
        <div id="modal"></div>
      </div>
    );
  }
};

export default Map;
