import React from "react";
import {Route, Switch} from "react-router-dom";
import CanvasPage from "./CanvasPage";


const Routes = () =>{
    return(
        <Switch>
            <Route path="/" exact component={CanvasPage}/>
        </Switch>
    );
};

export default Routes;