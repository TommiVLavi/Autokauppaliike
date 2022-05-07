import { useEffect, useState } from 'react'
import Table from './Table'

function List () {
    const [cars, setCars] = useState([]);

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

    return (
        <div>
            <Table cars={cars}/>
        </div>
    )
}

export default List;