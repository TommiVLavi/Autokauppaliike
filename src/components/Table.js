import { AgGridReact } from 'ag-grid-react'
import { useCallback, useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import Button from '@mui/material/Button';

function Table(props) {
    const gridRef = useRef();
    
    

    const columns = [
        { field: "brand", sortable: true, filter: true },
        { field: "model", sortable: true, filter: true },
        { field: "color", sortable: true, filter: true },
        { field: "fuel", sortable: true, filter: true },
        { field: "year", sortable: true, filter: true },
        { field: "price", sortable: true, filter: true }
    ]

    const onBtnExport = useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, []);

    const onGridReady = useCallback((params) => {
        params.api.sizeColumnsToFit();
        window.addEventListener('resize', function () {
            setTimeout(function () {
                params.api.sizeColumnsToFit();
            });
        });

        gridRef.current.api.sizeColumnsToFit();
    }, []);

    return (
        <div className="ag-theme-material"
            style={{ height: '500px', width: '95%', margin: 'auto' }}>

            <AgGridReact
                columnDefs={columns}
                rowData={props.cars}
                animateRows={true}
                ref={gridRef}
                rowSelection="multiple"
                onGridReady={(onGridReady, params => gridRef.current = params.api)}
            >
            </AgGridReact>

            <Button variant="outlined" onClick={onBtnExport}>EXPORT</Button>
            <Button variant="outlined" >Delete</Button>
        </div>
    )
}

export default Table;
