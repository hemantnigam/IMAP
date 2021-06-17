import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./styles.scss";

function PriceCard({ label, actualValue, percentValue, isProfit }) {
  const [className, setClassName] = useState();
  const [percentageValue, setPercentValue] = useState();
  useEffect(() => {
    if (isProfit) {
      setClassName("net-percent-value profit");
      setPercentValue(`+${percentValue}%`);
    } else {
      setClassName("net-percent-value loss");
      setPercentValue(`-${percentValue}%`);
    }
  }, []);

  return (
    <div className="price-card">
      <Card bordered={false}>
        <div className="price-card-content">
          <div className="label">{label}</div>
          <div className="value d-flex">
            <div className="actual-value">{actualValue}</div>
            <div className={className}>{percentageValue}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PriceCard;
