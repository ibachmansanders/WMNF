import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebarItem extends Component {
  render() {
    return(
        <li className="active">
            <a>{this.props.text}<img src={this.props.url}/></a>
        </li>
    );
  }
};

SidebarItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

export default SidebarItem;