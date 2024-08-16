import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";

type RowDef = {
  make: string,
  model: string,
  price: number,
  electric: boolean
}

export const Table = () => {
  // Row Data: The data to be displayed.
  const [rowData,setRowData] = useState<RowDef[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<ColDef[]>([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
    { headerName: "Electric", field: "electric" }
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
};
