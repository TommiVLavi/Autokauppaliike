import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function tab (){

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              The Storage
            </Typography>

            <Button variant="contained">Contained</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default tab;