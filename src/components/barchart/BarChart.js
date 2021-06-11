import React from "react";
import ReactECharts from "echarts-for-react";

function BarChart({ data }) {
  const colorList = ["#11A1FD", "#5A75F8"];
  data.forEach((item, index) => {
    item.type = "bar";
    item.barWidth = 15;
    item.itemStyle = {
      borderRadius: [7, 7, 0, 0],
      color: colorList[index],
    };
  });
  const options = {
    title: {
      text: "Customers Report",
    },
    tooltip: {
      show: true,
    },
    legend: {
      right: 0,
      itemGap: 30,
      data: ["Active", "New"],
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#0000000a",
          dashOffset: 5,
        },
      },
      axisLabel: {
        color: "#00000054",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          dashOffset: 5,
        },
      },
      axisLabel: {
        color: "#00000054",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: [5, 5],
        },
      },
    },
    grid: {
      left: 30,
      right: 10,
      bottom: 20,
    },
    animation: true,
    animationDuration: 70,
    animationDurationUpdate: 1000,
    animationEasing: "linear",
    series: data,
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

export default BarChart;
