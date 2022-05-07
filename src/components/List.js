import { useEffect, useState, useRef } from 'react'
import Table from './Table'
import Tab from './Tab'

function List () {
    const [cars, setCars] = useState([]);

    const gridRef = useRef();

    useEffect(() => fetching,
    [])

    const fetching = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(resp => resp.json())
        .then(data => {
            setCars(data._embedded.cars)
        })
        .catch(err => console.error(err))
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then( resp => fetching())
        .catch(err => console.error(err))
    }

    return (
        <div>
            <Tab saveCar={saveCar}/>
            <Table cars={cars} gridRef={gridRef} 
             setCars={setCars}/>
        </div>
    )
}

export default List;