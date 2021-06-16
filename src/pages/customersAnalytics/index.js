import React from "react";
import { Card } from "antd";
import "./styles.scss";
import GridTable from "../../components/gridtable/GridTable";
import { tableData } from "../../mockData";
import BarChart from "../../components/barchart";
import PieChart from "../../components/piechart";

function CustomersAnalytics() {
  const colorList = [
    "#37a2da",
    "#32c5e9",
    "#67dfe2",
    "#ffda5b",
    "#ff9f7e",
    "#fb7393",
    "#e062ae",
    "#e690d1",
    "#8477ea",
    "#37a2da",
  ];

  tableData.forEach((data,index)=>{
    data.no = index+1;
    data.key = index+1;
  })
  
  const columnsData = Object.keys(tableData[0]).map((item) => ({
    title: item,
    dataIndex: item,
    key: item,
  }));
  const barChartData = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      name: "Active",
    },
    {
      data: [10, 20, 250, 180, 170, 10, 70],
      name: "New",
    },
  ];
  const pieChartData = [
    { y: 1048, name: "India", },
    { y: 735, name: "USA" },
    { y: 580, name: "UK" },
    { y: 484, name: "UAE" },
    { y: 300, name: "Singapore" },
    { y: 300, name: "Malaysia" },
    { y: 300, name: "Norway" },
    { y: 300, name: "France" },
    { y: 1048, name: "Indiana" },
    { y: 335, name: "Germany" },
    { y: 280, name: "England" },
    { y: 684, name: "Indonesia" },
    { y: 200, name: "Iceland" },
    { y: 500, name: "Greenland" },
    { y: 30, name: "Mexico" },
    { y: 90, name: "Sweden" },
  ]

  React.useEffect(() => {
    columnsData.forEach((column) => {
      if (column.key === "customer") {
        column.render = (customer,row,index) => {
          return (
            <div className="d-flex align-items-center">
              <div className="name-avatar" style={{backgroundColor:colorList[index]}}>
                {customer.substring(0, 1).toUpperCase()}
              </div>
              <div>{customer}</div>
            </div>
          );
        };
      }

      if(column.key==='totalSpending') {
        column.render=(spending)=>{
          return <div>${spending}</div>
        }
      }
    });
    pieChartData.forEach((item,index)=>{
      // item.top=40;
      // item.itemStyle = {
      //   color:colorList[index%colorList.length]
      // }
      item.color = colorList[index%colorList.length];
    })
  });

  
  return (
    <div className="customer-analytics">
      <div className="chart-container d-flex">

        <Card bordered={false} className="bar-chart">
          <BarChart data={barChartData} />
        </Card>
        <Card bordered={false} className="geo-chart">
          <PieChart data={pieChartData}/>
          {/* <GeoChart /> */}
        </Card>
      </div>
      <div className="customer-analytics-table grid-table">
        <GridTable rowData={tableData} columnsData={columnsData} />
      </div>
    </div>
  );
}

export default CustomersAnalytics;
