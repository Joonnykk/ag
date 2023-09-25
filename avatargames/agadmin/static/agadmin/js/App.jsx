import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import Box from '@mui/material/Box';
import {Drawer} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Navigation from "./components/Navigation";


const root = createRoot(document.getElementById('ag-admin'))
root.render(<App />)



export default function App({ children }) {
    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
        showDrawer ? setShowDrawer(false) : setShowDrawer(true)
    }


    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

                <Box sx={{ mt: 8, display: 'flex', flexGrow: 1}}>
                    <Box sx={{width: 250, boxShadow: 3 }}>
                        <Navigation />
                    </Box>

                    <Box sx={{ flexGrow: 1, p: 4 }}>
                         content
                    </Box>
                </Box>

            </Box>
        </>

    )
}

