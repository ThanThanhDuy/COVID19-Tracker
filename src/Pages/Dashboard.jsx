import React, { useState } from "react";
import Hospital from "../Components/Hospital/Hospital";
import OverView from "../Components/OverView/OverView";
// import PropTypes from 'prop-types'
import SideBar from "./../Components/SideBar/SideBar";
import "./Dashboard.scss";
function Dashboard(props) {
  const [vis, setVis] = useState(0);
  const changeVis = (index) => {
    setVis(index);
  };
  return (
    <div className="dashboard">
      <SideBar changeVis={changeVis} />
      {vis === 0 && <OverView />}
      {vis === 1 && <Hospital />}
    </div>
  );
}

// Dashboard.propTypes = {

// }

export default Dashboard;
