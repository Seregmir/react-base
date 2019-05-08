import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn: loggedIn, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => loggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={'/'}/>
            )}
        />
    );
};

export default PrivateRoute;