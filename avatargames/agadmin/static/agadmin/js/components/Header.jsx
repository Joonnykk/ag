import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function Header({ toggleDrawer }) {
    return (
        <AppBar
            position="fixed"
            color="primary"
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase' }}>
                        Avatar games
                    </Typography>
                </Box>

                <Button onClick={toggleDrawer} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}