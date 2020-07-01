import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {logOut} from '../redux/Credenciales/AuthSlice';


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
    menuFullPage: {
        position: 'absolute',
        zIndex: 1000,
        width: '100%',
        height: '90%',
        backgroundColor: 'rgb(172, 173, 188)'
    }
}));

function Navbar(props) {
    const classes = useStyles();

    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();


    // Con esto se controla el estado de visible o no
    const toggleMenu = () => {
        {
            visible ? setVisible(false) : setVisible(true)
        }

    }


    const menuBody = (
        // TODO: Con esto vamos a poner el menu con el tiempo voy a traer la lista de Menus desde el backend
        <div className={classes.menuFullPage}>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Menu
            </Typography>
        </div>
    );

    const isLoggedButtons = (
        <Button
            onClick={() => dispatch(logOut())}
            color="inherit">Salir</Button>
    );

    const isNotLoggedButtons = (
        <Button
            color="inherit">Login</Button>
    );

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static">

                    <Toolbar variant="dense">
                        {props.isAuthenticated ? (
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                        ) : null}
                        <Typography variant="h6" className={classes.title}>
                            Rossini
                        </Typography>
                        {props.isAuthenticated ? isLoggedButtons : isNotLoggedButtons}
                    </Toolbar>
                </AppBar>
            </div>
            {visible ? menuBody : null}
        </React.Fragment>
    );
}

Navbar.propTypes = {
    test: PropTypes.exact({})
}

export default Navbar;