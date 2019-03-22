import React, {Component} from 'react';
import Routes from './components/Routes';
import {Router} from "react-router-dom";
import History from './components/History';

class SharedApp extends Component {
    render() {
        return (
            <Router history={History}>
                <div className="App">
                    <Routes/>
                </div>
            </Router>
        );
    }
}

export default SharedApp;