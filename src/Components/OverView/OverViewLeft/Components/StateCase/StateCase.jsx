import React from "react";
// import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import Zoom from "react-reveal/Zoom";
import "./StateCase.scss";
function StateCase(props) {
  const { dataFollowDay } = props;
  const data = {
    labels: dataFollowDay.date,
    datasets: [
      {
        data: dataFollowDay.active,
        label: "Active",
        borderColor: "#118ab2",
        fill: false,
        tension: 0.2,
      },
      {
        data: dataFollowDay.recovered,
        label: "Recovered",
        borderColor: "#06d6a0",
        fill: false,
        tension: 0.2,
      },
      {
        data: dataFollowDay.deaths,
        label: "Deaths",
        borderColor: "#ef476f",
        fill: false,
        tension: 0.2,
      },
    ],
  };
  const option = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff  ",
        },
      },
    },
  };

  return (
    <div className="stateCase">
      <div className="stateCase__box">
        <Zoom delay={800}>
          <Line data={data} options={option} />
        </Zoom>
      </div>
    </div>
  );
}

// StateCase.propTypes = {};

export default React.memo(StateCase);
