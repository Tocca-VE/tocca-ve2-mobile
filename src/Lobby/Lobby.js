import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Timer from "./Timer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Lobby.css";
const Lobby = () => {
  return (
    // <span>Lobby</span>

    <div>
      <div>
        <Timer />
      </div>
      <Carousel
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
      >
        <div>
          <img src="assets/1.jpeg" alt="" />
          <div key="content-0" className="my-slide primary">
            <h1>Presentation mode</h1>
          </div>
        </div>
        <div>
          <img src="assets/2.jpeg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};
export default Lobby;
