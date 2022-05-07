import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Add from './Add'

function tab (props){

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              The Storage
            </Typography>

            <Add saveCar={props.saveCar}/>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default tab;