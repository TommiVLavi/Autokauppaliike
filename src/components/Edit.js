import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Add(props){
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: 0, price: 0
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const inputChanged =(event) => {
        setCar({...car, [event.target.name]: event.target.value })
    }

    const editCar = (props) => {
        setCar({brand: props.car.brand,
                model: props.car.brand,
                color: props.car.color,
                fuel: props.car.fuel,
                year: props.car.year,
                price: props.car.price
        })
        handleClose();
    }

    return(
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Edit
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit</DialogTitle>

                <DialogContent>
                <DialogContentText>

                </DialogContentText>
                    <TextField
                        
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange = {event => inputChanged(event)}
                        label="Brand"
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange = {event => inputChanged(event)}
                        label="Model"
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange = {event => inputChanged(event)}
                        label="Color"
                        fullWidth
                    />       

                    <TextField
                        
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange = {event => inputChanged(event)}
                        label="Fuel"
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange = {event => inputChanged(event)}
                        label="Year"
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange = {event => inputChanged(event)}
                        label="Price"
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={editCar}>Insert</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Add;