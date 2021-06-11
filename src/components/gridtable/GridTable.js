import React from "react";
import { Table,Card } from "antd";

function GridTable({ rowData, columnsData }) {
  return (
    <>
      <Card bordered={false}>
        <div className="grid-table__header">Top Customers</div>
        <Table
          className="grid-table__content"
          dataSource={rowData}
          columns={columnsData}
        />
      </Card>
    </>
  );
}

export default GridTable;
