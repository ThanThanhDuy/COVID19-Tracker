import React from "react";
// import PropTypes from "prop-types";
import HeaderOver from "./Components/HeaderOver/HeaderOver";
import StatusCase from "./Components/StatusCase/StatusCase";

function OverViewLeft(props) {
  return (
    <div className="overView__left">
      <HeaderOver />
      <StatusCase />
    </div>
  );
}

// OverViewLeft.propTypes = {};

export default OverViewLeft;
