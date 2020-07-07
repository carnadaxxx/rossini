import React, {useState} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn, logFail } from './AuthSlice';
import { showAlert, hideAlert } from '../Alertas/AlertSlice';


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

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const getTokenFromServer = (email, password) => {
        const endpoint = 'http://localhost:8000/api-token/';
        const body = JSON.stringify({'email': email, 'password': password});
        const options = {headers:{'Content-Type': 'application/json'}};

        axios.post(
                endpoint,
                body,
                options
                ).then(
                    res => {
                        if (res.status === 200)  {showData(res);  dispatch(hideAlert())}
                    }
                ).catch((err) => {
                    dispatch(logFail())
                    dispatch(showAlert({'alertSeverity': 'error', 'messageAlert': err.response.data.detail}))
                });

    }

    const showData = (response) => {
        dispatch(logIn(response.data.access))
    }

    if (isAuthenticated===true) {
        return <Redirect to={'/dashboard'} />
    }

    const sedDataToServer = (e) => {
        e.preventDefault();
        getTokenFromServer(email, password)
    }

    return (
        <React.Fragment>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Login
            </Typography>
            <form onSubmit={sedDataToServer}>
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

