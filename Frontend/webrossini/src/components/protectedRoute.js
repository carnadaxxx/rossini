import React from "react";
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({isAuthenticated, children, ...rest}) => {

    return (
        <Route
            {...rest}
            render={({location}) =>
                !!isAuthenticated ? (
                    children
                ) : (
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