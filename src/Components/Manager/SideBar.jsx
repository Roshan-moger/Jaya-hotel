// src/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import {  Table, MenuButtonWide } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import "./../Manager/navpages/table.css"

const Sidebar = () => {
  return (
    <div className="sidebar-menu col-3">
      <Nav className="flex-column nav">
        {/* Uncomment the lines below if you want to include Home and Room menu items */}
        {/* <Nav.Link as={NavLink} to="/manager/" exact="true"><House className="me-2 icon-black"/>Home</Nav.Link> */}
        {/* <Nav.Link as={NavLink} to="/manager/room"><DoorClosed className="me-2 icon-black"/>Room</Nav.Link> */}
        <Nav.Link as={NavLink} to="/manager/"  exact="true"><Table className="me-2 icon-black"/>Tables</Nav.Link>
        <Nav.Link as={NavLink} to="/manager/menu"><MenuButtonWide className="me-2 icon-black"/>Menu</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
