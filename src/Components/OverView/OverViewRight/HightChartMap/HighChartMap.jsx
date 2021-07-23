import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import Zoom from "react-reveal/Zoom";
import "./HighChartMap.scss";

highchartsMap(Highcharts);

const initOptions = {
  // chart: {
  //   height: "500",
  // },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#a5bbb9"],
      [0.4, "#789996"],
      [0.6, "#4b7773"],
      [0.8, "#356661"],
      [1, "	#1f5550"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Case",
      joinBy: ["hc-key", "key"],
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
          minWidth: 300,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
};

function HighChartMap(props) {
  const { mapData } = props;
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));
      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData]);
  if (!mapLoaded) return null;
  return (
    <Zoom delay={200}>
      <HighchartsReact
        highcharts={Highcharts}
        options={cloneDeep(options)}
        constructorType="mapChart"
        ref={chartRef}
      />
    </Zoom>
  );
}

// HighCharMap.propTypes = {};

export default HighChartMap;
