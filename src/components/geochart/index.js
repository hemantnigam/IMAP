import { useState, useEffect } from "react";
import ImapChart from "../imap-chart";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import drilldow from "highcharts/modules/drilldown";
import dataModule from "highcharts/modules/data";
import axios from "axios";

drilldow(Highcharts);
dataModule(Highcharts);

function GeoChart() {
  const [data, setData] = useState([]);
  const [separators, setSeparators] = useState([]);

  useEffect(() => {
    getData("countries/us/us-all", true);
    return () => {
      setData([]);
      setSeparators([]);
    };
  }, []);
  const getData = (mapkey, evaluateSeperator = false) => {
    axios
      .get("https://code.highcharts.com/mapdata/" + mapkey + ".geo.json")
      .then((res) => res.data)
      .then((result) => {
        const tempdata = Highcharts.geojson(result);
        tempdata.forEach((d, i) => {
          d.value = i;
        });
        setData(tempdata);
        if (evaluateSeperator) {
          const tempSeparators = Highcharts.geojson(result, "mapline");
          setSeparators(tempSeparators);
        }
      })
      .catch((err) => {});
  };
  const options = {
    title: {
      text: "Geographical Analysis",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },

    subtitle: {
      text: "",
      floating: true,
      align: "right",
      y: 50,
      style: {
        fontSize: "16px",
      },
    },

    colorAxis: {
      min: 0,
      minColor: "#E6E7E8",
      maxColor: "#0c2556",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    plotOptions: {
      map: {
        states: {
          hover: {
            color: "#0c2556",
          },
        },
      },
    },

    series: [
      {
        data: data,
        name: "USA",
        dataLabels: {
          enabled: true,
          format: "{point.properties.postal-code}",
        },
      },
      {
        type: "mapline",
        data: separators,
        color: "silver",
        enableMouseTracking: false,
        animation: {
          duration: 500,
        },
      },
    ],

    drilldown: {
      activeDataLabelStyle: {
        color: "#FFFFFF",
        textDecoration: "none",
        textOutline: "1px #000000",
      },
      drillUpButton: {
        relativeTo: "spacingBox",
        position: {
          x: 0,
          y: 60,
        },
      },
    },
  };
  return (
    <ImapChart>
      <HighchartsReact
        containerProps={{ style: { width: "100%", height: "100%" } }}
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </ImapChart>
  );
}

export default GeoChart;
