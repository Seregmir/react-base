/**
 * @component       PrivateRoute
 * @description     A wrapper for nodes protected by a statement (boolean from parent),
 *                  usually used for login protected pages.
 * @author          Steven van Bennekom <https://stevenvanbennekom.nl>
 */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: component, statement: statement, ...parentProps}) => {
    return (
        <Route
            {...parentProps}
            render={props => statement ? (<Component {...props}/>) : (<Redirect to={'/'}/>)}/>
    );
};

export default PrivateRoute;