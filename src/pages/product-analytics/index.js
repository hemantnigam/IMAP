import { productData } from "../../mockData";
import GridTable from "../../components/gridtable";
import LineChart from "../../components/linechart";
import HorizontalBarChart from "../../components/horizontal-barchart";
import "./styles.scss";
import { Card } from "antd";
import PriceCard from "../../components/price-card"

function ProductAnalytics() {
  const columnsData = Object.keys(productData[0]).map((item) => ({
    title: item,
    dataIndex: item,
    key: item,
  }));

  return (
    <div className="product-analytics">
      <div className="product-analytics__table grid-table">
        <GridTable
          label="Top Selling Product"
          rowData={productData}
          columnsData={columnsData}
        />
      </div>
      <div className="product-analytics__widgets">
        <div className="product-analytics__widgets__infocards">
          <PriceCard
            label="Total Profit"
            actualValue="$95,595"
            percentValue="3.55"
            isProfit={true}
          />
          <PriceCard
            label="Total Expenses"
            actualValue="$5,595"
            percentValue="2.4"
            isProfit={false}
          />

          <PriceCard
            label="Total Users"
            actualValue="15,595"
            percentValue="3.6"
            isProfit={false}
          />
        </div>
        <div className="product-analytics__widgets__charts">
          <Card bordered={false}>
            <LineChart />
          </Card>
          <Card bordered={false}>
            <HorizontalBarChart />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductAnalytics;
