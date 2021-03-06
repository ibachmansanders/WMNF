//create a district filter to help users navigate
import React, { Component } from 'react';
import ReactBootstrap, { Button, Panel, NavItem, NavDropdown, MenuItem, Dropdown, DropdownButton } from 'react-bootstrap';

//generate a Bootsrap sidebar, with menu items generated by the SidebarItem component
class DistrictFilter extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      saco: false,
      androscoggin: false,
      pemigewasset: false
    };
  }
  componentDidUpdate() {
    //create bounds object to store bounds data and update map
    var boundsSQL = "SELECT * FROM district_boundary_83 WHERE dist_name IN (";
    var inSQL = ["'a'","'p'","'s'"];
    var endSQL = ")";

    //detect state  and toggle css
    if (this.state.androscoggin == true) {
         $("#androscoggin").css("background-color","rgba(57, 132, 57, 0.5)");
         inSQL[0] = "'Androscoggin'";
    } else {
        $("#androscoggin").css("background-color", "#252525");
        inSQL[0] = "'a'";
    };
    if (this.state.pemigewasset == true) {
         $("#pemigewasset").css("background-color","rgba(57, 132, 57, 0.5)");
         inSQL[1] = "'Pemigewasset'";
    } else {
        $("#pemigewasset").css("background-color", "#252525");
        inSQL[1] = "'p'";
    };
    if (this.state.saco == true) {
        $("#saco").css("background-color","rgba(57, 132, 57, 0.5)");
        inSQL[2] = "'Saco'";
    } else {
        $("#saco").css("background-color", "#252525");
        inSQL[2] = "'s'";   
    }; 

    //get bounds using the constructed SQL, and fit the map to it
    var sqlCall = new cartodb.SQL({user:'bachmansande'});
    var sql = boundsSQL + inSQL[0] + "," + inSQL[1] + "," + inSQL[2] + endSQL;
    sqlCall.getBounds(sql).done(function(bounds) {
      masterMap.fitBounds(bounds, {
        animate: true,
        paddingTopLeft: [-100,-100],
        paddingBottomRight: [-100,-100]
      });
    });
  }
  render() {
    return(
      <div id="district-filter-wrapper">
        <h2 id="district-title">Districts</h2>
        <Button id="androscoggin" bsStyle="success" onClick={ ()=> this.setState({ androscoggin: !this.state.androscoggin })}>Androscoggin District</Button>
        <Button id="pemigewasset" bsStyle="success" onClick={ ()=> this.setState({ pemigewasset: !this.state.pemigewasset })}>Pemigewasset District</Button>
        <Button id="saco" bsStyle="success" onClick={ ()=> this.setState({ saco: !this.state.saco })}>Saco District</Button>
      </div>
    );
  }
};

export default DistrictFilter;