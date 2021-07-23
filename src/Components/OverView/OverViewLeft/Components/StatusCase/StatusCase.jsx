import React, { useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";
import "./StatusCase.scss";
import CaseItem from "./CaseItem/CaseItem";
function StatusCase(props) {
  const { totalCase } = props;
  console.log(totalCase);
  const confirm = useRef(0);
  confirm.current = 0;
  if (totalCase.length > 0) {
    const { quantity } = totalCase.find((caseT) => {
      return caseT.title === "confirmed";
    });
    confirm.current = quantity;
  }
  return (
    <div className="statusCase">
      <div className="statusCase__box">
        <div className="status__title">
          <Fade top delay={200}>
            <span>Status of cases</span>
          </Fade>
        </div>
        <div className="status__modal">
          <div className="line__left"></div>
          <div className="line__center">
            <div className="line__center--show">
              <Fade top delay={200}>
                <span className="center__text">Total Case</span>
              </Fade>
              <Fade top duration={500} delay={1100}>
                <h3>
                  <CountUp
                    delay={1.2}
                    end={confirm.current}
                    duration={2}
                    separator={","}
                  />
                </h3>
              </Fade>
            </div>
          </div>
          <div className="line__right"></div>
        </div>
        <div className="status__progressBar">
          <div className="progressBar__box">
            {totalCase.map((item, index) => (
              <CaseItem
                key={index}
                title={item.title}
                caseQ={item.quantity}
                totalCase={totalCase}
                confirm={confirm.current}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="status__detail">
          <div className="detail__box">
            <div className="detail__item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// StatusCase.propTypes = {};

export default StatusCase;
