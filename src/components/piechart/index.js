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
    series: [
      {
        name: "Customer Analytics",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: true,
          color:"#00000090"
        },
        data: data,
      },
    ],
    animation: true,
    animationDuration: 1170,
    animationDurationUpdate: 1000,
    animationEasing: "linear",
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
