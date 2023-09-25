import React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function Navigation() {
    return (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              {/*<ListItemIcon>*/}
              {/*  <InboxIcon />*/}
              {/*</ListItemIcon>*/}
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              {/*<ListItemIcon>*/}
              {/*  <DraftsIcon />*/}
              {/*</ListItemIcon>*/}
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
    )
}