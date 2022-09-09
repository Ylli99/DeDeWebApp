import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar elevation={5} position="fixed" open={open} style={{flex: 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        DeDelivery
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none'}) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader />
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
                PaperProps={{ elevation: 9 }}
            >
                <Toolbar style={{backgroundColor: '#625834'}}/>
                <DrawerHeader>
                    <Grid container alignItems={'center'} >
                        <Grid item style={{marginRight: '3em'}}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontFamily: "Pacifico", fontSize: "1.2em", textTransform: "none", color: "black"}}>Menu</Typography>
                        </Grid>
                    </Grid>
                </DrawerHeader>
                <Divider />
                <List>
                    <Grid container direction={'column'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid item alignSelf={'center'}>
                            <Button style={{backgroundColor: 'black', marginBottom: '0.3em', width: '17.1em'}}>
                                <Typography style={{fontFamily: "Pacifico", fontSize: "2em", textTransform: "none", color: "white"}}>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button style={{backgroundColor: 'grey', marginBottom: '0.3em', width: '17.1em'}}>
                                <Typography style={{fontFamily: "Pacifico", fontSize: "2em", textTransform: "none", color: "white"}}>Register</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </List>
                <Divider />
                <List>
                    {['Home', 'About', 'Contact'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <Link to={`/${text.toLowerCase()}`} style={{textDecoration: 'none', flex: 1, color: 'inherit'}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text === 'Home' ? <HomeRoundedIcon to={'/'}/> : (
                                            text === 'About' ? <AutoStoriesRoundedIcon to={'/about'}/> : <SendRoundedIcon to={'/contact'}/>)
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Toolbar/>
        </Box>
    );
}
