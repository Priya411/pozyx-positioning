import React, { Component } from 'react';
import logo from './logo.svg';
import CanvasDraw from './components/CanvasDraw';
import './App.css';

class App extends Component {
    render() {
        
        let vw = window.innerWidth;
        let vh = window.innerHeight;
        
        return (
                <div className="App">
                    <CanvasDraw canvasWidth={vw} canvasHeight={vh}/>
                </div>
                );
    }
}

export default App;
