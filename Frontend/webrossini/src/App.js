import React from 'react';
import 'fontsource-roboto';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider } from 'react-redux';
import store from '../src/redux/store';
import Dashboard from '../src/containers/Dashboard';
import Login from '../src/containers/Login';
import SingIn from '../src/containers/SingIn';
import OrdersList from '../src/containers/OrdersList';
import OrderDetail from '../src/containers/OrderDetail';
import Layout from '../src/layout/Layout';
import NotFound from '../src/components/NotFound404'


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/new-user' component={SingIn}/>
                        <Route exact path='/orders' component={OrdersList}/>
                        <Route exact path='/orders/:id' component={OrderDetail}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
