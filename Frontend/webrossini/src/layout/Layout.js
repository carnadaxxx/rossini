import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';

function Layout(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar isAuthenticated={props.isAuthenticated} isSessionStore={props.isSessionStore}/>
            {String(props.isAuthenticated) + '******' + typeof (props.isAuthenticated) + ' // ' + String(props.isSessionStore) }
            <Container maxWidth="sm">
                { props.children }
            </Container>
        </React.Fragment>
    );
}

export default Layout;