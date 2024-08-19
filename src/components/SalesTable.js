// src/components/SalesTable.js
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SalesTable = ({ data, comparison = false }) => {
  const columns = comparison
    ? [
        { headerName: 'Product Name', field: 'product' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Date 1 Sales', field: 'date1Sales' },
        { headerName: 'Date 2 Sales', field: 'date2Sales' },
        { headerName: 'Difference', field: 'difference' },
      ]
    : [
        { headerName: 'Product Name', field: 'product' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Quantity Sold', field: 'quantitySold' },
        { headerName: 'Sales Amount', field: 'salesAmount' },
      ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default SalesTable;
