import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2),
    },
    blockButtons: {
        marginTop: '2em'
    }
}));

const SingIn = (props) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Crear Usuario
            </Typography>

            <form>
                <TextField id="standard-basic" label="Correo Electrónico" fullWidth required/>
                <TextField id="standard-basic" label="Nombre" fullWidth required/>
                <TextField id="standard-basic" label="Contraseña" type="password" fullWidth required/>
                <TextField id="standard-basic" label="Repetir Contraseña" type="password" fullWidth required/>
                <div className={classes.blockButtons}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        fullWidth>Crear Usuario</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default SingIn;