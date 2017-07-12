import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-bootstrap';

class SidebarItem extends Component {
  render() {
    return(
        <MenuItem id={this.props.eventKey} eventKey={this.props.eventKey}>{this.props.text}<img src={this.props.url}/></MenuItem>
    );
  }
};

SidebarItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

export default SidebarItem;