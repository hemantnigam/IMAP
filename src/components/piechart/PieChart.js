import React from "react";
import ReactECharts from "echarts-for-react";

function PieChart({ data }) {
  const options = {
    title: {
      text: "Customer's Analytics",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: 0,
      orient: "horizontal",
      type: "scroll",
    },
    series: [
      {
        name: "Customer Analytics",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "28",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "India" },
          { value: 735, name: "USA" },
          { value: 580, name: "UK" },
          { value: 484, name: "UAE" },
          { value: 300, name: "Singapore" },
          { value: 300, name: "Malaysia" },
          { value: 300, name: "Norway" },
          { value: 300, name: "France" },
          { value: 1048, name: "Indiana" },
          { value: 335, name: "Germany" },
          { value: 280, name: "England" },
          { value: 684, name: "Indonesia" },
          { value: 200, name: "Iceland" },
          { value: 500, name: "Greenland" },
          { value: 30, name: "Mexico" },
          { value: 90, name: "Sweden" },
        ],
      },
    ],
  };
  return (
    <div>
      <ReactECharts
        option={options}
        notMerge
        lazyUpdate
        theme="light"
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}

export default PieChart;
