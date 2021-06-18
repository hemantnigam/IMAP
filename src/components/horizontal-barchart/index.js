import ImapChart from "../imap-chart";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function HorizontalBarChart() {
  const categories = [
    "Shoes",
    "Jackets",
    "TShirts",
    "Bags",
    "Hats",
    "Jeans",
    "Watches",
    "Accessories",
  ];
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Top Selling Categories",
      align: "left",
      style: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
      },
    },
    xAxis: [
      {
        categories: categories,
        reversed: false,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (male)",
        },
      },
    ],
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () {
          return "$"+Math.abs(this.value);
        },
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    // tooltip: {
    //   formatter: function () {
    //     return (
    //       "<b>" +
    //       this.series.name +
    //       ", age " +
    //       this.point.category +
    //       "</b><br/>" +
    //       "Population: " +
    //       Highcharts.numberFormat(Math.abs(this.point.y), 1) +
    //       "%"
    //     );
    //   },
    // },

    series: [
      {
        name: "Spendings",
        data: [2, 5, 9, 10, 6, 8, 4, 7],
        color:"#11A1FD"
      },
    ],
  };
  return (
    <ImapChart>
      <HighchartsReact
        containerProps={{ style: { width: "100%", height: "100%" } }}
        highcharts={Highcharts}
        options={options}
      />
    </ImapChart>
  );
}

export default HorizontalBarChart;
