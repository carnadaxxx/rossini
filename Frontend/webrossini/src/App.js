import React, {useState} from 'react';
import 'fontsource-roboto';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrivateRoute from '../src/components/protectedRoute';
import Dashboard from '../src/containers/Dashboard';
import Login from './redux/Credenciales/Login';
import OrdersList from '../src/containers/OrdersList';
import OrderDetail from '../src/containers/OrderDetail';
import Layout from '../src/layout/Layout';
import NotFound from '../src/components/NotFound404'
import  localforage  from 'localforage';


const App = () => {

    const [ isSessionStore, setIsSessionStore ] = useState(false);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isAlertVisible = useSelector(state => state.alert.isAlertVisible);

    localforage.getItem('localAuth').then(
        (value) => {
            setIsSessionStore(!!value.isAuth);
        }
    ).catch((error) => {
        console.log(error);
    });

    return (
        <Router>
            <Layout
                isAuthenticated={isAuthenticated}
                isSessionStore={isSessionStore}
                isAlertVisible={isAlertVisible}
            >
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <PrivateRoute
                        exact={true}
                        isAuthenticated={isAuthenticated}
                        path={'/dashboard'}><Dashboard/></PrivateRoute>
                    <PrivateRoute
                        exact={true}
                        isAuthenticated={isAuthenticated}
                        path={'/orders'}><OrdersList/></PrivateRoute>
                    <PrivateRoute
                        exact={true}
                        isAuthenticated={isAuthenticated}
                        path={'/orders/:id'}><OrderDetail/></PrivateRoute>

                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    );
}


export default App;
