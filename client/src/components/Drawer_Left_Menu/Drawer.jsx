import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptIcon from '@mui/icons-material/Receipt';

function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const menuItems = [
        { text: 'Overview', icon: <HomeFilledIcon /> },
        { text: 'Transactions', icon: <ImportExportIcon /> },
        { text: 'Budgets', icon: <DonutSmallIcon /> },
        { text: 'Pots', icon: <PaidIcon /> },
        { text: 'Recurring Bills', icon: <ReceiptIcon /> },
    ];

     const DrawerList = (
        <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>    
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div style={{paddingLeft: 20}}>
                    <h1>finance</h1>
                </div>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;