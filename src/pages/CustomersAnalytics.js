import React from "react";
import { Card, DatePicker, Button } from "antd";
import "../styles/pages/CustomersAnalytics.scss";
import GridTable from "../components/GridTable";
import { tableData } from "../mockData";
import BarChart from "../components/BarChart";

function CustomersAnalytics() {
  const disabledDate = (current) => {
    return current && current > new Date();
  };
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
  return (
    <div className="customer-analytics">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="heading h4">Customers Analytics</div>
        <div className="export-data d-flex justify-content-center align-items-center">
          <div className="datepicker mr-3 d-flex align-items-center">
            <DatePicker
              className="border-radius-2"
              format="YYYY-MM-DD"
              disabledDate={disabledDate}
            />
            <div className="date-divider my-2">-</div>
            <DatePicker
              className="border-radius-2"
              format="YYYY-MM-DD"
              disabledDate={disabledDate}
            />
          </div>
          <Button type="primary" className="border-radius-2">
            Export
          </Button>
        </div>
      </div>
      <div className="chart-container d-flex">
        <Card bordered={false} className="bar-chart">
          <BarChart data={barChartData} />
        </Card>
        <Card bordered={false} className="geo-chart">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div className="customer-analytics-table grid-table">
        <GridTable rowData={tableData} columnsData={columnsData} />
      </div>
    </div>
  );
}

export default CustomersAnalytics;
