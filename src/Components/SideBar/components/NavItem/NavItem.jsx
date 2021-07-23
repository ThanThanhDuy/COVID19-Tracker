import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import "./NavItem.scss";
function NavItem(props) {
  const { icon, text, isActive, time } = props;
  return (
    <>
      {isActive ? (
        <li className="nav__item active">
          <Fade top delay={time}>
            <i className={icon}></i>
            {/* <span>{text}</span> */}
          </Fade>
        </li>
      ) : (
        <li className="nav__item">
          <Fade top delay={time}>
            <i className={icon}></i>
            {/* <span>{text}</span> */}
          </Fade>
        </li>
      )}
    </>
  );
}

NavItem.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default NavItem;
