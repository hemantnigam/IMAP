import React from "react";
import { Table,Card } from "antd";

function GridTable({ rowData, columnsData, label }) {
  return (
    <>
      <Card bordered={false}>
        <div className="grid-table__header">{label}</div>
        <Table
          className="grid-table__content"
          dataSource={rowData}
          pagination ={{size:"small",showSizeChanger:true,showQuickJumper:true}}
          columns={columnsData}
        />
      </Card>
    </>
  );
}

export default GridTable;
