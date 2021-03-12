import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import ToccaLogo from "../assets/tocca_logo.svg";
import Timer from "./Timer";
import Home from "../assets/home_image.png";
import Clock from "../assets/icons/clock-blue.svg";
// import Marquee from "react-marquee-slider";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Lobby.css";
import Marquee from "react-marquee-slider";
import Sponcer_01 from "../assets/sponcer_01.png";
import Sponcer_02 from "../assets/sponcer_02.jpg";
import Sponcer_03 from "../assets/sponcer_03.png";
const Lobby = () => {
  return (
    // <span>Lobby</span>

    <div class="main-container">
      <h3 className="sec-label">The Bridge Conference</h3>
      <div className="banner-lobby-wrap">
            
         <div className="timer-wrap">
            <Timer />
        </div>
        <div className="lobby-wrap-bottom">
          <div className="event-title">The Bridge Conference</div>
          <div className="event-description">This event will include introduction about Tocca is? How it can be used ? Meet new people. Let’s explore the power of connection together. </div>
        </div>
            
       </div>

       <div className="session-wrap">
       <h3 className="session-label">Live Sessions</h3>
       

     <div className="carousal-wrap">
        <Carousel
          autoFocus={true}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
        >
          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Join</Button>

            </div>
          </div>

          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Join</Button>

            </div>
          </div>

          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Join</Button>

            </div>
          </div>
        </Carousel>
      </div>
      </div>

   <div class="spacer05"></div>
       <div className="session-wrap">
       <h3 className="session-label">Recommended Sessions</h3>
       

     <div className="carousal-wrap">
        <Carousel
          autoFocus={true}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
        >
          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Add to Calender</Button>

            </div>
          </div>

          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Add to Calender</Button>

            </div>
          </div>

          <div>
           
            <div key="content-0" className="my-slide primary">
              <div className="carousal-label">Fireside Chat with Baman Motivala, Salesforce + Matt Hill, Copado</div>
              <p>General discussion of the Biomedical sector, Terminus is the important euod eopjw wpiamep ewpmw <a href="">Read more…</a></p>
               <div className="time-wrap">
                  <img
                    src={Clock}
                    width="22"
                    className="d-inline-block align-top"
                    alt=""
                   
                  />
                  <span className="time-set">Starts in 5 mins</span>
              </div>

              <div class="user-wrapper">
              <ul>
                <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
                 <li>
                  <img
                    src={Home}
                    width="24"
                    className=""
                    alt="The Bridge Conference"
                  />
                </li>
              </ul>
              </div>

               <Button variant="primary btn-join">Add to Calender</Button>

            </div>
          </div>

        </Carousel>
      </div>
      </div>

<div class="spacer05"></div>
       <div className="session-wrap">
       <h3 className="session-label">Sponsors</h3>
      <div className="sponcer-list-slider">
      <Marquee
                  direction="rtl"
                  scatterRandomly={false}
                  resetAfterTries={1}
                  key="sponsors-list"
                  velocity={5}
                >

                <div className="sponcer-list-item">
                   <img
                    style={{ cursor: "pointer" }}
                  src={Sponcer_01}
                  alt="logo"
                  height="28"
                  fluid
                />
                <div className="sponcer-description">
                <h4>Terminus</h4>
                <p>General discussion of the Biomedical sector, Terminus is the important 
                    <a href="">Readmore… </a> </p>
                    <Button variant="primary btn-visit">Visit Booth</Button>
                </div>

                </div>

	              <div className="sponcer-list-item">
                   <img
                    style={{ cursor: "pointer" }}
                  src={Sponcer_01}
                  alt="logo"
                  height="28"
                  fluid
                />
                <div className="sponcer-description">
                <h4>Terminus</h4>
                <p>General discussion of the Biomedical sector, Terminus is the important 
                    <a href="">Readmore… </a> </p>
                    <Button variant="primary btn-visit">Visit Booth</Button>
                </div>

                </div>

                <div className="sponcer-list-item">
                   <img
                    style={{ cursor: "pointer" }}
                  src={Sponcer_01}
                  alt="logo"
                  height="28"
                  fluid
                />
                <div className="sponcer-description">
                <h4>Terminus</h4>
                <p>General discussion of the Biomedical sector, Terminus is the important 
                    <a href="">Readmore… </a> </p>
                    <Button variant="primary btn-visit">Visit Booth</Button>
                </div>

                </div>

                <div className="sponcer-list-item">
                   <img
                    style={{ cursor: "pointer" }}
                  src={Sponcer_01}
                  alt="logo"
                  height="28"
                  fluid
                />
                <div className="sponcer-description">
                <h4>Terminus</h4>
                <p>General discussion of the Biomedical sector, Terminus is the important 
                    <a href="">Readmore… </a> </p>
                    <Button variant="primary btn-visit">Visit Booth</Button>
                </div>

                </div>

                <div className="sponcer-list-item">
                   <img
                    style={{ cursor: "pointer" }}
                  src={Sponcer_01}
                  alt="logo"
                  height="28"
                  fluid
                />
                <div className="sponcer-description">
                <h4>Terminus</h4>
                <p>General discussion of the Biomedical sector, Terminus is the important 
                    <a href="">Readmore… </a> </p>
                    <Button variant="primary btn-visit">Visit Booth</Button>
                </div>

                </div>

                
                </Marquee>

      </div>
    </div>

<div class="footer">
  <span className="">Powered by</span>
    <div className="footer-logo">
      <img
          src={ToccaLogo}
          width="75"
          className="d-inline-block align-top"
          alt="Tocca"
        />
    </div>
</div>


    </div>
  );
};
export default Lobby;
