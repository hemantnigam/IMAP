import React from "react";
import { withRouter } from "react-router-dom";
import CustomersAnalytics from "../customersAnalytics";
import ProductAnalytics from "../product-analytics";
import { DatePicker, Button } from "antd";
import "./styles.scss";

const Analytics = withRouter((props) => {
  const componentName = props?.location?.pathname.substring(props?.location?.pathname.lastIndexOf('/')+1,props?.location?.pathname.length);
  const disabledDate = (current) => {
    return current && current > new Date();
  };

  return (
    <div className="analytics-container">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="heading h4">{componentName} Analytics</div>
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
      {componentName.toLowerCase()==='customers' ? <CustomersAnalytics /> : <ProductAnalytics />}
    </div>
  );
});

export default Analytics;
