import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    bodyMenu: {
        background: 'rgb(50, 50, 50)',
        zIndex: 1000,
        width: '100%',
        height: '100%',
        padding: '0.8em',
        position: 'absolute'
    },
    contentMenu: {
        backdropFilter: ' grayscale(0.5) opacity(0.8)'
    }
}));

function Navbar(props) {
    const classes = useStyles();

    const [toggle, setToggle] = useState(false);

    const Toggle = () => {
        if (toggle === true) {
            setToggle(false);
        } else {
            setToggle(true)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar  variant="dense">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu" onClick={Toggle}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Rossini
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.bodyMenu} style={{ display: (toggle ? 'block' : 'none') }}>
                <div className={classes.contentMenu}>
                <Typography variant="h1" component="h2" gutterBottom color='Primary'>
                    Menu
                </Typography>
                </div>
            </div>
        </div>
    );
}

export default Navbar;