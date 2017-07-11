import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

//generate a Bootsrap sidebar, with menu items generated by the SidebarItem component
class Sidebar extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <ul id="sidebar-menu" className="sidebar-nav">
            <li className="sidebar-brand"><a id="menu-toggle" href="#">Layers<span id="main-icon" className="glyphicon glyphicon-align-justify"></span></a></li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">     
          <SidebarItem text="Mountains" url="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710172003mountain-15.svg"/>
          <SidebarItem text="Trails" url="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710203126trail.svg" />
        </ul>
      </div>
    );
  }
};

export default Sidebar;