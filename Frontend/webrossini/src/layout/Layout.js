import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import Alerts from '../redux/Alertas/Alert';

function Layout(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar isAuthenticated={props.isAuthenticated} isSessionStore={props.isSessionStore}/>
            <Alerts severity={props.alertSeverity} isAlertVisible={props.isAlertVisible} messageAlert={props.messageAlert}/>
            <Container maxWidth="sm">
                { props.children }
            </Container>
        </React.Fragment>
    );
}

export default Layout;