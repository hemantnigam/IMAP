import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";

function GridTable({ rowData }) {
  return (
    <>
      <div className="grid-table__header">Top Customers</div>
      <AgGridReact
        className="grid-table__content"
        rowData={rowData}
        domLayout="autoHeight"
      >
        {rowData &&
          rowData[0] &&
          Object.keys(rowData[0]).length > 0 &&
          Object.keys(rowData[0]).map((col, index) => (
            <AgGridColumn field={col} key={index}></AgGridColumn>
          ))}
      </AgGridReact>
    </>
  );
}

export default GridTable;
