import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

function table(props) {
    const columns = [
        { field: "brand", sortable: true, filter: true},
        { field: "model", sortable: true, filter: true},
        { field: "color", sortable: true, filter: true},
        { field: "fuel", sortable: true, filter: true},
        { field: "year", sortable: true, filter: true},
        { field: "price", sortable: true, filter: true}
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '500px', width: '95%', margin: 'auto' }}>

            <button></button>

            <AgGridReact
                columnDefs={columns}
                rowData={props.cars}
                animateRows={true}
                defaultCsvExportParams={true}
                >
            </AgGridReact>
        </div>
    )
}

export default table;
