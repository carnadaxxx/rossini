import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Dashboard = () => {
    return (
        <div>
            <Typography variant="h1" component="h2" gutterBottom align={'center'}>
                Dashboard
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card variant={'outlined'}>
                        <CardContent>
                            Lista de almacenes con los productos en almacen ???
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card variant={'outlined'}>
                        <CardContent>
                            Lista de Entregas del Dia esto tiene que actualizarce en tiempo real
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card variant={'outlined'}>
                        <CardContent>
                            Estadisticas de las ordenes
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
