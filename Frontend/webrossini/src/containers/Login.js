import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getLoginData } from '../actions/AuthenticationAction';

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

    const onSubmit = e => {
        e.preventDefault();


    }

    if( props.isAuthenticated )
        console.log('esta autenticado');

    return (

        <React.Fragment>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Login
            </Typography>
            <form onSubmit={e => onSubmit(e)}>
                <TextField
                    value={email}
                    label="Correo Electrónico"
                    type="email"
                    onChange={() => setEmail(target.value)}
                    fullWidth
                    required/>
                <TextField
                    value={password}
                    label="Contraseña"
                    type="password"
                    onChange={() => setPassword()}
                    fullWidth
                    required/>
                <div className={classes.blockButtons}>
                    <Button
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}



export default connect(mapStateToProps, {getLoginData})(Login);
