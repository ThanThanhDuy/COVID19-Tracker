import React from "react";
// import PropTypes from "prop-types";
import "./NavItemMenu.scss";
import Fade from "react-reveal/Fade";
function NavItemMenu(props) {
  const { icon, text, isActive, time } = props;
  return (
    <>
      {isActive ? (
        <li className="navItem activeSubMenu">
          <Fade top delay={time}>
            <i className={icon}></i>
            <span>{text}</span>
          </Fade>
        </li>
      ) : (
        <li className="navItem">
          <Fade top delay={time}>
            <i className={icon}></i>
            <span>{text}</span>
          </Fade>
        </li>
      )}
    </>
  );
}

// NavItemMenu.propTypes = {};

export default NavItemMenu;
