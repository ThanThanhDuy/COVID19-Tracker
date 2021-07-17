import React from "react";
// import PropTypes from "prop-types";
import OverViewLeft from "./OverViewLeft/OverViewLeft";
import OverViewRight from "./OverViewRight/OverViewRight";

function OverView(props) {
  return (
    <div className="overView">
      <OverViewLeft />
      <OverViewRight />
    </div>
  );
}

// OverView.propTypes = {};

export default OverView;
