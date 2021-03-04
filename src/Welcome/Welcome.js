import React, { useState } from "react";
import { Container, Col, Row, Navbar } from "react-bootstrap";
/*import Image from './assets/home_image.png'*/
/*import Image from './assets/image.png';
import Image from './assets/image.svg';*/
import Marquee from "react-marquee-slider";

const Welcome = () => {
  const [isPaused, setPause] = useState(false);
  console.log("isPaused", isPaused);
  return (
    /*  <span>Welcome</span>*/
    <div className="main">
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs={12}>
            <Navbar>
              <Navbar.Brand href="#home">
                <img
                  src="./assets/tocca_logo.svg"
                  width="138"
                  className="d-inline-block align-top"
                  alt="Tocca"
                />
              </Navbar.Brand>
            </Navbar>

            <div className="banner-wrap">
              <img
                src="./assets/home_image.png"
                width="138"
                className="d-inline-block align-top"
                alt="The Bridge Conference"
              />
            </div>
            <div className="home-body">
              <h2 className="welcome-label">
                Welcome to the 2020 Bridge Conference
              </h2>
              <div className="time-wrap">
                <img
                  src="./assets/ic-clock.svg"
                  width="22"
                  className="d-inline-block align-top"
                  alt=""
                />
                <span className="time-set">Oct 15, 2020 8:00 AM PDT</span>
              </div>

              <h3>Meet our Sponsors</h3>

              <div className="sponcer-slider">
                <Marquee
                  direction="rtl"
                  scatterRandomly={false}
                  resetAfterTries={1}
                  key="sponsors-list"
                  velocity={isPaused ? 0 : 5}
                >
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/IO/EQ/KA/SELLER-58506199/bag-metal-logo-250x250.jpg"
                    alt="logo"
                    height="200"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="200"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/IO/EQ/KA/SELLER-58506199/bag-metal-logo-250x250.jpg"
                    alt="logo"
                    height="200"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="200"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/IO/EQ/KA/SELLER-58506199/bag-metal-logo-250x250.jpg"
                    alt="logo"
                    height="200"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="200"
                  />
                </Marquee>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Welcome;
