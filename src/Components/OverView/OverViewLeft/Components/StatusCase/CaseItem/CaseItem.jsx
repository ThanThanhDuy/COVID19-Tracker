import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";
import "./CaseItem.scss";
function CaseItem(props) {
  const { title, caseQ, totalCase, confirm, index } = props;
  const clasName = `bar__${title} bar__percent`;
  const idName = `bar__${title}`;
  const titlewillShow = title.charAt(0).toUpperCase() + title.slice(1);
  let leftP = 0;
  let percent = 0;
  let caseItemCheck = false;
  for (let i = 0; i < totalCase.length - 2; i++) {
    if (totalCase[i].quantity > 0) caseItemCheck = true;
  }

  switch (title) {
    case "active":
      if (caseItemCheck) {
        leftP = 0;
        percent = ((caseQ / confirm) * 100).toFixed(1);
      } else {
        leftP = 0;
        percent = 33.3;
      }

      break;
    case "recovered":
      if (caseItemCheck) {
        const { quantity } = totalCase.find((caseT) => {
          return caseT.title === "active";
        });
        leftP = ((quantity / confirm) * 100).toFixed(1);
        percent = ((caseQ / confirm) * 100).toFixed(1);
      } else {
        leftP = 33.3;
        percent = 33.3;
      }

      break;
    case "deaths":
      if (caseItemCheck) {
        const active = totalCase.find((caseT) => {
          return caseT.title === "active";
        });
        const recover = totalCase.find((caseT) => {
          return caseT.title === "recovered";
        });
        leftP = (
          (active.quantity / confirm) * 100 +
          (recover.quantity / confirm) * 100
        ).toFixed(1);
        percent =
          100 -
          ((active.quantity / confirm) * 100 +
            (recover.quantity / confirm) * 100);
      } else {
        leftP = 66.6;
        percent = 33.3;
      }
      break;
    default:
      break;
  }
  useEffect(() => {
    if (document.getElementById(idName)) {
      var cssAnimation = document.createElement("style");
      cssAnimation.type = "text/css";
      var rules = document.createTextNode(
        `@-webkit-keyframes slider${index} {` +
          "0% { width:0; }" +
          `100% { width:${percent}%; }` +
          "}"
      );
      cssAnimation.appendChild(rules);
      document.getElementById(idName).appendChild(cssAnimation);
    }
  }, [index, percent]);
  return (
    <>
      {title !== "confirmed" && (
        <div
          id={idName}
          className={clasName}
          style={{
            width: `calc(${percent}% - 0.2rem)`,
            left: title !== "deaths" && `calc(${leftP}% + 0.2rem)`,
            right: title === "deaths" && `0`,
          }}
        >
          <div className="bar__detail">
            <Fade top duration={500} delay={800}>
              <h6>
                <CountUp delay={1.2} end={caseQ} duration={1} separator={","} />
              </h6>
              <span className="bar__text">{titlewillShow}</span>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
}

// CaseItem.propTypes = {};

export default CaseItem;
