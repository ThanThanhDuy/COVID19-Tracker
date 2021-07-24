import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import OverViewLeft from "./OverViewLeft/OverViewLeft";
import OverViewRight from "./OverViewRight/OverViewRight";
import "./OverView.scss";
import { sortBy } from "lodash";

import Api from "./../../api/Api";
import moment from "moment";
function OverView(props) {
  const [countries, setCountries] = useState([]);
  const [countrySelect, setCountrySelect] = useState("VN");
  const [countrySelectSlug, setCountrySelectSlug] = useState("vietnam");
  const [totalCase, setTotalCase] = useState([]);
  const [mapData, setMapData] = useState({});
  const [dataFollowDay, setDataFollowDay] = useState({});
  useEffect(() => {
    const fectProductList = async () => {
      try {
        const response = await Api.getCountries();
        setCountries(sortBy(response, "Country"));
      } catch (error) {
        console.log("fail: ", error);
      }
    };
    fectProductList();
  }, []);
  useEffect(() => {
    if (countrySelectSlug) {
      const fectProductList = async () => {
        try {
          const response = await Api.getCase(countrySelectSlug);
          //totalCase
          let totalCase = [];
          if (response.length > 0) {
            const caseByLastUpdate = response[response.length - 1];
            const active = (
              (caseByLastUpdate.Active / caseByLastUpdate.Confirmed) *
              100
            ).toFixed(1);
            const recover = (
              (caseByLastUpdate.Recovered / caseByLastUpdate.Confirmed) *
              100
            ).toFixed(1);
            const death = (
              (caseByLastUpdate.Deaths / caseByLastUpdate.Confirmed) *
              100
            ).toFixed(1);
            let confirmTotal = 0;
            if (
              active >= 100 ||
              recover >= 100 ||
              death >= 100 ||
              caseByLastUpdate.Active +
                caseByLastUpdate.Recovered +
                caseByLastUpdate.Deaths >
                caseByLastUpdate.Confirmed
            ) {
              confirmTotal =
                caseByLastUpdate.Active +
                caseByLastUpdate.Recovered +
                caseByLastUpdate.Deaths;
            } else {
              confirmTotal = caseByLastUpdate.Confirmed;
            }
            totalCase = [
              {
                title: "active",
                quantity: caseByLastUpdate.Active,
              },
              {
                title: "recovered",
                quantity: caseByLastUpdate.Recovered,
              },
              {
                title: "deaths",
                quantity: caseByLastUpdate.Deaths,
              },
              {
                title: "confirmed",
                quantity: confirmTotal,
              },
            ];
          } else {
            totalCase = [
              {
                title: "active",
                quantity: 0,
              },
              {
                title: "recovered",
                quantity: 0,
              },
              {
                title: "deaths",
                quantity: 0,
              },
              {
                title: "confirmed",
                quantity: 0,
              },
            ];
          }
          setTotalCase(totalCase);
          //chartJS
          const res = [...response];
          let dataTmp = {
            date: [],
            active: [],
            recovered: [],
            deaths: [],
          };
          if (res.length > 0) {
            const arrTmp = res.slice(res.length - 12);
            // arrTmp.forEach((caseFollowDate) => {
            //   dataTmp.date.push(moment(caseFollowDate.Date).format("MMM DD"));
            //   dataTmp.active.push(caseFollowDate.Active);
            //   dataTmp.recovered.push(caseFollowDate.Recovered);
            //   dataTmp.deaths.push(caseFollowDate.Deaths);
            // });
            for (let i = 0; i < arrTmp.length; i++) {
              if (i < arrTmp.length - 4) {
                dataTmp.date.push(moment(arrTmp[i + 2].Date).format("MMM DD"));
              } else if (i === arrTmp.length - 4) {
                dataTmp.date.push(moment(arrTmp[i + 2].Date).format("MMM DD"));
              }
              if (i > 1 && i < arrTmp.length - 1) {
                dataTmp.active.push(
                  arrTmp[i + 1].Active - arrTmp[i].Active > 0
                    ? arrTmp[i + 1].Active - arrTmp[i].Active
                    : 0
                );
                dataTmp.recovered.push(
                  arrTmp[i + 1].Recovered - arrTmp[i].Recovered > 0
                    ? arrTmp[i + 1].Recovered - arrTmp[i].Recovered
                    : 0
                );
                dataTmp.deaths.push(
                  arrTmp[i + 1].Deaths - arrTmp[i].Deaths > 0
                    ? arrTmp[i + 1].Deaths - arrTmp[i].Deaths
                    : 0
                );
              }
            }
          } else {
            for (let i = 0; i < 30; i++) {
              let today = new Date();
              let yesterday = new Date();
              yesterday.setDate(today.getDate() - i);
              dataTmp.date.push(moment(yesterday.Date).format("MMM DD"));
              dataTmp.active.push(0);
              dataTmp.recovered.push(0);
              dataTmp.deaths.push(0);
            }
          }
          setDataFollowDay(dataTmp);
        } catch (error) {
          console.log("fail: ", error);
        }
      };
      fectProductList();
    }
  }, [countrySelectSlug]);
  useEffect(() => {
    if (countrySelect) {
      import(
        `@highcharts/map-collection/countries/${countrySelect.toLowerCase()}/${countrySelect.toLowerCase()}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [countrySelect]);
  const handleSubmit = (value) => {
    setCountrySelect(value);
    const { Slug } = countries.find((country) => {
      return country.ISO2 === value;
    });
    setCountrySelectSlug(Slug);
  };

  return (
    <div className="overView">
      <OverViewLeft
        countries={countries}
        countrySelect={countrySelect}
        handleSubmit={handleSubmit}
        totalCase={totalCase}
        dataFollowDay={dataFollowDay}
      />
      <OverViewRight countrySelect={countrySelect} mapData={mapData} />
    </div>
  );
}

// OverView.propTypes = {};

export default OverView;
