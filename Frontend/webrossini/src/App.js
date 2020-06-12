import React from 'react';
import 'fontsource-roboto';
import '../src/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../src/containers/Dashboard';
import SingIn from '../src/containers/SingIn';
import OrdersList from '../src/containers/OrdersList';
import OrderDetail from '../src/containers/OrderDetail';
import KanbanBoard from '../src/containers/Kanbanboard';
import Layout from '../src/layout/Layout';
import NotFound from '../src/components/NotFound404'


const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/login' component={SingIn}/>
                    <Route exact path='/orders' component={OrdersList}/>
                    <Route exact path='/orders/:id' component={OrderDetail}/>
                    <Route exact path='/kanban' component={KanbanBoard}/>
                    <Route component={NotFound}/>s
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
