import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Clock from "../assets/ic-clock.svg";
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
                    <UI.ProfileIcon />
                    {/* <img
                      src={Clock}
                      width="24"
                      className="d-inline-block align-center"
                      alt=""
                    />{" "} */}
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <UI.SwappedCardsIcon />
                    Swapped Cards
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">
                    <img
                      src={Clock}
                      width="24"
                      className="d-inline-block align-center"
                      alt=""
                    />{" "}
                    Terms of Service
                  </Nav.Link>
                </Nav.Item>
              </div>

              <div className="nav-bottom">
                <Button variant="link">
                  <img
                    src={Clock}
                    width="24"
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
