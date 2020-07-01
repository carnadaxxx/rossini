import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({isAuthenticated, children, ...rest}) => {

    return (
        <Route
            {...rest}
            render={({location}) =>
                !!isAuthenticated ? (
                    console.log(String(isAuthenticated)),
                    console.log('if is true'),
                    children
                ) : (
                    console.log(String(isAuthenticated)),
                    console.log('if is false'),
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.prototype = {
    isAuthenticated: PropTypes.bool,
}

export default PrivateRoute;