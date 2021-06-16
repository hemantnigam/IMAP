import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ImapChart from "../imap-chart";

function BarChart({ data }) {
  const colorList = ["#11A1FD", "#5A75F8"];
  data.forEach((item, index) => {
    item.color = colorList[index];
  });
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Customers Report",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Spendings($)",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: data,
  };
  return (
    <ImapChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ImapChart>
  );
}

export default BarChart;
