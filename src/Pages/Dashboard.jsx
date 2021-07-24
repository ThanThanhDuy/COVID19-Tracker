import React, { useState } from "react";
import Hospital from "../Components/Hospital/Hospital";
import Menu from "../Components/Menu/Menu";
import OverView from "../Components/OverView/OverView";
// import PropTypes from 'prop-types'
import SideBar from "./../Components/SideBar/SideBar";
import "./Dashboard.scss";
function Dashboard(props) {
  const [vis, setVis] = useState(0);
  const changeVis = (index) => {
    setVis(index);
  };
  const navLink = [
    {
      icon: "uil uil-estate",
      text: "Overview",
      isActive: true,
      time: 200,
    },
    {
      icon: "uil uil-clinic-medical",
      text: "Hospital",
      isActive: false,
      time: 300,
    },
    {
      icon: "uil uil-head-side-cough",
      text: "Symptoms",
      isActive: false,
      time: 400,
    },
    {
      icon: "uil uil-syringe",
      text: "Preventions",
      isActive: false,
      time: 500,
    },
  ];

  return (
    <div className="dashboard">
      <SideBar changeVis={changeVis} navLink={navLink} />
      <Menu navLink={navLink} changeVis={changeVis} />
      {vis === 0 && <OverView />}
    </div>
  );
}

// Dashboard.propTypes = {

// }

export default Dashboard;
