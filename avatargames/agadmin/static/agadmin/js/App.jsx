import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import Box from '@mui/material/Box';
import {Drawer} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


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

            {/*<Drawer*/}
            {/*  anchor={'left'}*/}
            {/*  open={showDrawer}*/}
            {/*  onClose={() => setShowDrawer(false)}*/}
            {/*>*/}
            {/*  <h1>Drawer</h1>*/}
            {/*</Drawer>*/}

            <Box>
                <Grid container>
                    <Grid px={}>

                    </Grid>
                </Grid>

            </Box>
        </>

    )
}

