import React from "react";
import Fade from "react-reveal/Fade";
import "./HeaderOver.scss";

function HeaderOver(props) {
  const { countries, handleSubmit, countrySelect } = props;

  return (
    <div className="headerOver">
      <div className="headerOver__box">
        <Fade top delay={200}>
          <div className="headerOver__Title">
            <span>
              <span className="title__text--overView">Covid19</span> Overview
            </span>
          </div>
        </Fade>
      </div>
      <div className="headerOver__select">
        <Fade top delay={200}>
          <form>
            <select
              className="selectBox"
              value={countrySelect}
              onChange={(e) => {
                handleSubmit(e.target.value);
              }}
            >
              {countries.map((country) => (
                <option
                  className="selectItem"
                  key={country.ISO2}
                  value={country.ISO2}
                >
                  {country.Country}
                </option>
              ))}
            </select>
          </form>
        </Fade>
      </div>
    </div>
  );
}

// HeaderOver.propTypes = {};

export default HeaderOver;
