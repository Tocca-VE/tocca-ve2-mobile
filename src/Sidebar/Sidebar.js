import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Clock from "../assets/ic-clock.svg";
import Logout from "../assets/icons/logout.svg";
import Terms from "../assets/icons/terms.svg";
import Swapcard from "../assets/icons/swap-cards.svg";
import Userwhite from "../assets/icons/user-white.svg";
import * as UI from '../components/Icons';

const Sidebar = () => {
  return (
    /*<span>Sidebar</span>*/

    <div className="main">
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs={12}>
            <Nav
              className="col-md-12 d-none d-md-block sidebar"
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <div className="profile-wrap">
                <div className="profile-pic">AM</div>
                <div className="profile-name">Alex Mercer</div>
              </div>

              <div className="seperator"></div>

              <div className="sidebar-sticky"></div>
              <div className="navigation-wrap">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <span><img
                      src={Userwhite}
                      width="17"
                      className="d-inline-block align-center"
                      alt=""
                    /></span>
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                  <span><img
                      src={Swapcard}
                      width="24"
                      className="d-inline-block align-center"
                      alt=""
                    />
                  </span>
                    Swapped Cards
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">
                    <span>
                    <img
                      src={Terms}
                      width="18"
                      className="d-inline-block align-center"
                      alt=""
                    />
                    </span>
                    Terms of Service
                  </Nav.Link>
                </Nav.Item>
              </div>

              <div className="nav-bottom">
                <Button variant="link">
                  <img
                    src={Logout}
                    width="20"
                    className="d-inline-block align-center"
                    alt=""
                  />
                  Logout
                </Button>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
