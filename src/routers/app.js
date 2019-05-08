import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "../pages/homepage";

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;