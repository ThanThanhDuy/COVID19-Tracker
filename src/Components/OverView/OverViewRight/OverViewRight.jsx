import React from "react";
import HighChartMap from "./HightChartMap/HighChartMap";
import "./OverViewRight.scss";
import img from "../../../asserts/stayhome.svg";
import keepMoving from "../../../asserts/keepMoving.svg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
function OverViewRight(props) {
  const { mapData } = props;
  return (
    <div className="Overview__right">
      <div className="right__content">
        <div className="right__content__box">
          <div className="right__content--text">
            <Fade top delay={200}>
              <p className="p1">
                <span className="p1--detail">Stay</span>Home
              </p>
            </Fade>
            <Fade top delay={300}>
              <p className="p2">
                Stay
                <span className="p2--detail">Safe</span>
              </p>
            </Fade>
          </div>
          <div className="right__img">
            <Zoom delay={200}>
              <img src={img}></img>
            </Zoom>
          </div>
        </div>

        <div className="right__content__box2">
          <div className="right__content--text2">
            <Fade top delay={200}>
              <p className="p12--detail">Keep</p>
              <p className="p12">Life</p>
            </Fade>
            <Fade top delay={300}>
              <p className="p22">
                Moving
                <span className="p22--detail"></span>
              </p>
            </Fade>
          </div>
          <div className="right__img2">
            <Zoom delay={200}>
              <img src={keepMoving}></img>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="map__right">
        <HighChartMap mapData={mapData} />
      </div>
    </div>
  );
}

// OverViewRight.propTypes = {};

export default OverViewRight;
