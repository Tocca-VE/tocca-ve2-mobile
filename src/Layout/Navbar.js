import React from "react";
import { Navbar, Nav, ListGroup } from "react-bootstrap";
import Homedark from "../assets/home_dark.png";
import Calender from "../assets/icons/calendar.svg";
import Chat from "../assets/icons/chat-new.svg";
import Bell from "../assets/icons/notification.svg";
import Badge from 'react-bootstrap/Badge';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
    <div className="menu-box"></div>
      <Navbar.Brand href="#home">
      	 <img
                src={Homedark}
                width="100"
                className=""
                alt="The Bridge Conference"
              />
      </Navbar.Brand>

    
      <div className="nav-right">
      <ListGroup>
  <ListGroup.Item> <a href="">
     <img
        src={Calender}
        width="20"
        className=""
        alt="Calender"
      />
    </a></ListGroup.Item>
  <ListGroup.Item> <a href="">
     <img
        src={Chat}
        width="20"
        className=""
        alt="Chat"
      />
    </a></ListGroup.Item>
  <ListGroup.Item className="notify"> <a href="">
     <img
        src={Bell}
        width="22"
        className=""
        alt="Bell"
      />
      <Badge variant="primary">2</Badge>
    </a>
    </ListGroup.Item>
  
</ListGroup>
  
    
  </div>
      

      </Navbar>

  );
};
export default NavbarComponent;
