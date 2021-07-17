import React from "react";
import OverView from "../Components/OverView/OverView";
// import PropTypes from 'prop-types'
import SideBar from "./../Components/SideBar/SideBar";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <SideBar />
      <OverView />
    </div>
  );
}

// Dashboard.propTypes = {

// }

export default Dashboard;
