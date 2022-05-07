import { AgGridReact } from 'ag-grid-react'
import { useCallback } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import Button from '@mui/material/Button';
import Edit from './Edit'

function Table(props) {
    
    const columns = [
        { field: "brand", sortable: true, filter: true },
        { field: "model", sortable: true, filter: true },
        { field: "color", sortable: true, filter: true },
        { field: "fuel", sortable: true, filter: true },
        { field: "year", sortable: true, filter: true },
        { field: "price", sortable: true, filter: true }
    ]

    const onBtnExport = useCallback(() => {
        props.gridRef.current.api.exportDataAsCsv();
    }, []);

    const deleteCar = () => {
        props.setCars(props.cars.filter((car, index) => 
            index !== props.gridRef.current.getSelectedNodes()[0].childIndex))
    }

    const onGridReady = useCallback((params) => {
        params.api.sizeColumnsToFit();
        window.addEventListener('resize', function () {
            setTimeout(function () {
                params.api.sizeColumnsToFit();
            });
        });

        props.gridRef.current.api.sizeColumnsToFit();
    }, []);

    return (
        <div className="ag-theme-material"
            style={{ height: '500px', width: '95%', margin: 'auto' }}>

            <AgGridReact
                columnDefs={columns}
                rowData={props.cars}
                animateRows={true}
                ref={props.gridRef}
                rowSelection="multiple"
                onGridReady={(onGridReady, params => props.gridRef.current = params.api)}
            >
            </AgGridReact>

            <Button variant="outlined" onClick={onBtnExport}>EXPORT</Button>
            <Button variant='contained' onClick={deleteCar}>Delete</Button>
            <Edit cars={props.cars}/>
        </div>
    )
}

export default Table;
