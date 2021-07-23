import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import NavItem from "./components/NavItem/NavItem";
import Fade from "react-reveal/Fade";

import "./SideBar.scss";
function SideBar(props) {
  const { changeVis, navLink } = props;
  useEffect(() => {
    const navItem = document.querySelectorAll(".nav__item");
    const navItemMenu = document.querySelectorAll(".navItem");

    navItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        navItem.forEach((item, index) => {
          navItem[index].classList.remove("active");
        });
        navItem[index].classList.add("active");
        navItemMenu.forEach((item, index) => {
          navItemMenu[index].classList.remove("activeSubMenu");
        });
        navItemMenu[index].classList.add("activeSubMenu");
        changeVis(index);
      });
    });
  }, [changeVis]);
  return (
    <div className="sideBar">
      <div className="sideBar__nav">
        <ul className="nav__list">
          {navLink.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              text={item.text}
              isActive={item.isActive}
              time={item.time}
            />
          ))}
        </ul>
        <div className="sideBar__setting">
          <Fade top delay={600}>
            <i className="uil uil-setting"></i>
          </Fade>
        </div>
      </div>
    </div>
  );
}

// SideBar.propTypes = {};

export default SideBar;
