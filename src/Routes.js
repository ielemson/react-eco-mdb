import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./page/home/HomePage";
import NavbarPage from './page/appbar/AppBar';



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <NavbarPage />
                <Route exact path="/" component={HomePage} />
                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;
