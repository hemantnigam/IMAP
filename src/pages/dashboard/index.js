import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import PriceCard from "../../components/price-card";
import BarChart from "../../components/barchart";
import GeoChart from "../../components/geochart";
import PieChart from "../../components/piechart";
import LineChart from "../../components/linechart";
import HorizontalBarChart from "../../components/horizontal-barchart";
import Highcharts from "highcharts";
import HighchartsMaps from "highcharts/highmaps";
import { useSelector } from "react-redux";
import { Card } from "antd";
import "./styles.scss";

function Dashboard() {
  const isSidebarCollapsed = useSelector(
    (state) => state.app.isSidebarCollapsed
  );
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
  let key = 0;
  const [innerWidth, setInnerWidth] = useState(0);
  const [barChartData, setBarChartData] = useState();
  const [pieChartData, setPieChartData] = useState([
    { y: 1048, name: "India" },
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
  ]);

  useEffect(() => {
    setTimeout(() => {
      setInnerWidth(
        parseInt(
          window
            .getComputedStyle(document.getElementsByClassName("layout")[0])
            .width.replace("px","")
        )
      );
      reFlowAllCharts();
    }, 500);
  }, [isSidebarCollapsed]);

  useEffect(() => {
    setTimeout(() => {
      setInnerWidth(
        parseInt(
          window
            .getComputedStyle(document.getElementsByClassName("layout")[0])
            .width.replace("px","")
        )
      );
      setBarChartData([
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          name: "Active",
        },
        {
          data: [10, 20, 250, 180, 170, 10, 70],
          name: "New",
        },
      ]);
      if (pieChartData) {
        const tempData = pieChartData.map((item, index) => {
          if (item) item.color = colorList[index % colorList.length];
          return item;
        });
        setPieChartData(tempData);
      }

      reFlowAllCharts();
    }, 0);
    // eslint-disable-next-line
  }, []);
  const reFlowAllCharts = () => {
    for (let i = 0; i < Highcharts.charts.length; i += 1) {
      if (Highcharts.charts[i] !== undefined) {
        Highcharts.charts[i].reflow(); // here is the magic to update charts' looking
      }
    }
    for (let i = 0; i < HighchartsMaps.charts.length; i += 1) {
      if (HighchartsMaps.charts[i] !== undefined) {
        HighchartsMaps.charts[i].reflow(); // here is the magic to update charts' looking
      }
    }
  };
  const onLayoutChange = () => {
    reFlowAllCharts();
  };
  return (
    <div className="dashboard">
      {/* <DashboardHeader /> */}
      <GridLayout
        className="layout"
        cols={!isSidebarCollapsed ? 15 : 18}
        rowHeight={30}
        width={innerWidth}
        autoSize={true}
        onLayoutChange={() => onLayoutChange()}
      >
        <div key={key} data-grid={{ x: 0, y: 0, w: 3, h: 3, minW: 3, minH: 3 }}>
          <PriceCard
            label="Total Profit"
            actualValue="$95,595"
            percentValue="3.55"
            isProfit={true}
          />
        </div>
        <div
          key={key + 1}
          data-grid={{ x: 3, y: 0, w: 3, h: 3, minW: 3, minH: 3 }}
        >
          <PriceCard
            label="Total Expenses"
            actualValue="$5,595"
            percentValue="2.4"
            isProfit={false}
          />
        </div>
        <div
          key={key + 2}
          data-grid={{ x: 6, y: 0, w: 3, h: 3, minW: 3, minH: 3 }}
        >
          <PriceCard
            label="Total Users"
            actualValue="15,595"
            percentValue="3.6"
            isProfit={false}
          />
        </div>
        <div
          key={key + 4}
          data-grid={{ x: 9, y: 0, w: 6, h: 12, minW: 3, minH: 6 }}
        >
          <Card bordered={false}>
            <PieChart data={pieChartData} />
          </Card>
        </div>
        <div
          key={key + 5}
          data-grid={{ x: 12, y: 12, w: 6, h: 9, minW: 3, minH: 6 }}
        >
          <Card bordered={false}>
            <GeoChart />
          </Card>
        </div>
        <div
          key={key + 6}
          data-grid={{ x: 0, y: 3, w: 5, h: 9, minW: 3, minH: 6 }}
        >
          <Card bordered={false}>
            <BarChart data={barChartData || []} />
          </Card>
        </div>
        <div
          key={key + 7}
          data-grid={{ x: 0, y: 12, w: 9, h: 9, minW: 3, minH: 6 }}
        >
          <Card bordered={false}>
            <LineChart />
          </Card>
        </div>
        <div
          key={key + 8}
          data-grid={{ x: 5, y: 3, w: 4, h: 9, minW: 3, minH: 3 }}
        >
          <Card bordered={false}>
            <HorizontalBarChart />
          </Card>
        </div>
      </GridLayout>
    </div>
  );
}

export default Dashboard;
