import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ImapChart from "../imap-chart";

function PieChart({ data }) {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Customer's Analytics",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}$</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "$",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        innerSize: "60%",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}$",
        },
      },
    },
    series: [
      {
        name: "Total Spendings",
        colorByPoint: true,
        data: data,
      },
    ],
  };
  return (
    <ImapChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ImapChart>
  );
}

export default PieChart;
