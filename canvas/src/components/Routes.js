import React from "react";
import {Route, Switch} from "react-router-dom";
import JumpApp from '../apps/JumpApp';
import BoxingApp from '../apps/BoxingApp';
import CanvasApp from '../apps/CanvasApp';
import MainApp from '../apps/MainApp';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/jumping" exact component={JumpApp}/>
            <Route path="/boxing" exact component={BoxingApp}/>
            <Route path="/canvas" exact component={CanvasApp}/>
            <Route path="/" exact component={MainApp}/>
        </Switch>
    );
};

export default Routes;