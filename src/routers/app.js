import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "../pages/homepage";
import notFound from '../pages/notFound';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;