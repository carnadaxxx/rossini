import React, {useState} from 'react';
import 'fontsource-roboto';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrivateRoute from '../src/components/protectedRoute';
import Dashboard from '../src/containers/Dashboard';
import Login from '../src/containers/Login';
import OrdersList from '../src/containers/OrdersList';
import OrderDetail from '../src/containers/OrderDetail';
import Layout from '../src/layout/Layout';
import NotFound from '../src/components/NotFound404'
import  localforage  from 'localforage';


const App = () => {

    const [ isSessionStore, setIsSessionStore ] = useState('');

    const isAuthenticated = !!useSelector(state => state.auth.isAuthenticated);

    const test = localforage.getItem('localAuth').then(
        (value) => {
            // value.isAuth ? console.log('true'): console.log('false');
            setIsSessionStore(!!value.isAuth);
        }
    ).catch((error) => {
        console.log(error);
    });

    return (
        <Router>
            <Layout isAuthenticated={isAuthenticated}  isSessionStore={isSessionStore}>
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

                    {/*<Route exact path='/' component={Dashboard}/>*/}
                    {/*<Route exact path='/new-user' component={SingIn}/>*/}
                    {/*<Route exact path='/orders' component={OrdersList}/>*/}
                    {/*<Route exact path='/orders/:id' component={OrderDetail}/>*/}
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    );
}


export default App;
