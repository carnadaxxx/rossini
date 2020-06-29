import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn }from '../redux/Credenciales/AuthSlice';


const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2),
    },
    blockButtons: {
        marginTop: '2em'
    }
}));


const Login = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const doSomthing = (e) => {
        e.preventDefault();
        dispatch(logIn());
    }

    return (
        <React.Fragment>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Login
            </Typography>
            <form onSubmit={doSomthing}>
                <TextField
                    value={email}
                    label="Correo Electrónico"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required/>
                <TextField
                    value={password}
                    label="Contraseña"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required/>
                <div className={classes.blockButtons}>
                    <Button
                        type={'submit'}
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        fullWidth>Login</Button>
                    <Button
                        variant="contained"
                        className={classes.margin}
                        fullWidth>Nuevo Usuario</Button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;

