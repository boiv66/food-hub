import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
    ColDef,
    ColGroupDef,
    Grid,
    GridOptions,
    GridReadyEvent,
  } from 'ag-grid-community';
  import { IOlympicData } from './interface';
  import './styles.css';
import { Button } from 'reactstrap';

const GridExample = () => {
    const gridRef = useRef<AgGridReact<IOlympicData>>(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState<IOlympicData[]>();
    const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
          { field: 'athlete', minWidth:120, headerName: 'OrderID' },
          { field: 'country', minWidth:120, headerName: 'CustomerID' },
          { field: 'sport', minWidth:120, headerName: 'Customer Name' },
          { field: 'gold', minWidth:120, headerName: 'ProductID' },
          { field: 'silver', minWidth:120, headerName: 'Product Name' },
          { field: 'bronze', minWidth:120, headerName: 'Product Color' },
          { field: 'total', minWidth:120, headerName: 'Order Status' },
          { field: '', minWidth:120, headerName: 'Order Date Time' },
          { field: '', minWidth:120, headerName: 'Action' },

    ]);
    const defaultColDef = useMemo<ColDef>(() => {
      return {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 100,
        flex: 1,
      };
    }, []);
  
    const onGridReady = useCallback((params: GridReadyEvent) => {
      fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
        .then((resp) => resp.json())
        .then((data: IOlympicData[]) => {
            console.log(data)
          setRowData(data);
        });
    }, []);
  
    const onBtExport = useCallback(() => {
      gridRef.current!.api.exportDataAsExcel();
    }, []);
  
    return (
      <div style={containerStyle}>
        <div className="container">
          <div className='text-right'>
            <Button
                color='primary'
              onClick={onBtExport}
              style={{ marginBottom: '5px', fontWeight: 'bold' }}
            >
              Download Excel
            </Button>
          </div>
          <div className="grid-wrapper">
            <div style={gridStyle} className="ag-theme-alpine">
              <AgGridReact<IOlympicData>
                pagination
                paginationPageSize={5}
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default GridExample