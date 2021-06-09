import React from "react";
import {Table} from "antd";

function GridTable({ rowData, columnsData }) {
  return (
    <>
      <div className="grid-table__header">Top Customers</div>
      <Table className="grid-table__content" dataSource={rowData} columns={columnsData} />;
    </>
  );
}

export default GridTable;
