import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import MailIcon from '@mui/icons-material/Mail';
import { MenuItem } from '@mui/material';
import { Link, useLocation  } from 'react-router-dom';
import "./HeaderCss/HeaderCss.css";


const pages = ["Home",  "Shop", "Product", "About"];

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function Lists() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const location = useLocation();


    return (
        <Box >
            <MuiAppBar position="static" className='headerLinksMuiAppBar'>
                <Toolbar onClick={handleDrawerOpen}
                    sx={{ mr: 2, ...(open) }}>
                    <IconButton
                        sx={{ color: "#272343" }}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <MenuItem sx={{ color: "#272343" }}>
                        All Categories
                    </MenuItem>
                </Toolbar>
                <Toolbar sx={{ display: "flex" }}>
                    {pages.map((page) => (
                        <Link key={page} to={"/"+ page.toLowerCase()} style={{ textDecoration: "none", color: "#272343" }}>
                            <MenuItem key={page} selected={location.pathname === '/' + page.toLowerCase()}>
                                <Typography textAlign="center" sx={{ color: location.pathname === '/' + page.toLowerCase() ? '#007580' : '#272343' }}>{page}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Toolbar>
            </MuiAppBar>

            <Drawer
                className='headerLinksMuiAppBarDrawer'
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
