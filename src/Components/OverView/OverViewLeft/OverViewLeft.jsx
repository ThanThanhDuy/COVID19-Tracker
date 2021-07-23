import React from "react";
// import PropTypes from "prop-types";
import HeaderOver from "./Components/HeaderOver/HeaderOver";
import StateCase from "./Components/StateCase/StateCase";
import StatusCase from "./Components/StatusCase/StatusCase";
import "./OverViewLeft.scss";
function OverViewLeft(props) {
  const { countries, countrySelect, handleSubmit, totalCase, dataFollowDay } =
    props;
  return (
    <div className="overView__left">
      <HeaderOver
        countries={countries}
        countrySelect={countrySelect}
        handleSubmit={handleSubmit}
      />
      <StatusCase totalCase={totalCase} />
      <StateCase dataFollowDay={dataFollowDay} />
    </div>
  );
}

// OverViewLeft.propTypes = {};

export default OverViewLeft;
