import React, { useState } from "react";
import { Container, Col, Row, Navbar, Button } from "react-bootstrap";
/*import Image from './assets/home_image.png'*/
/*import Image from './assets/image.png';
import Image from './assets/image.svg';*/
import Marquee from "react-marquee-slider";
import ToccaLogo from "../assets/tocca_logo.svg";
import Home from "../assets/home_image.png";
import Clock from "../assets/ic-clock-01.svg";
import Sponcer_01 from "../assets/sponcer_01.png";
import Sponcer_02 from "../assets/sponcer_02.jpg";
import Sponcer_03 from "../assets/sponcer_03.png";



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
                  src={ToccaLogo}
                  width="122"
                  className="d-inline-block align-top"
                  alt="Tocca"
                />
              </Navbar.Brand>
            </Navbar>

            <div className="banner-wrap"></div>
            <div className="banner-content">
              <img
                src={Home}
                width="179"
                className=""
                alt="The Bridge Conference"
              />
          
            </div>
            <div className="home-body">
              <h2 className="welcome-label">
                Welcome to the 2020 Bridge Conference
              </h2>
              <div className="time-wrap">
                <img
                  src={Clock}
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
                    height="32"
                  />
                   <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_01}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_02}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_03}
	                alt="logo"
	                height="32"
	                fluid
	              />

	               <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_01}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_02}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_03}
	                alt="logo"
	                height="32"
	                fluid
	              />

	               <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_01}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_02}
	                alt="logo"
	                height="32"
	                fluid
	              />

	              <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
	                src={Sponcer_03}
	                alt="logo"
	                height="32"
	                fluid
	              />

                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="32"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/IO/EQ/KA/SELLER-58506199/bag-metal-logo-250x250.jpg"
                    alt="logo"
                    height="32"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="32"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/IO/EQ/KA/SELLER-58506199/bag-metal-logo-250x250.jpg"
                    alt="logo"
                    height="32"
                  />
                  <img
                    onMouseOver={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    style={{ cursor: "pointer" }}
                    src="https://5.imimg.com/data5/SF/HT/GX/SELLER-83886466/pu-printed-logo-500x500.jpg"
                    alt="logo"
                    height="32"
                  />
                </Marquee>
              </div>
            </div>
          </Col>
        </Row>
<div className="main-bottom">
<Row className="justify-content-center">
          <Col  sm="6" lg="2" md="auto">
          <Button variant="primary">Enter the Event</Button>{' '}
          </Col>

</Row>
</div>

      </Container>
    </div>
  );
};
export default Welcome;
