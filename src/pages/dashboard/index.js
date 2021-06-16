import GridLayout from 'react-grid-layout';
import "./styles.scss";

function Dashboard() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 0, y: 0, w: 3, h: 2 },
    { i: "c", x: 0, y: 0, w: 1, h: 2 },
  ];
  return (
    // <GridLayout
    //   className="layout"
    //   layout={layout}
    //   cols={12}
    //   rowHeight={30}
    //   width={1200}
    //   compactType='vertical'
    //   autoSize={true}
    // >
    //   <div key="a">a</div>
    //   <div key="b">b</div>
    //   <div key="c">c</div>
    // </GridLayout>
    <div>Dashboard</div>
  );
}

export default Dashboard;
