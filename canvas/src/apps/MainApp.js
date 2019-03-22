import React, {Component} from 'react';
import './App.css';
import History from '../components/History';

class MainApp extends Component {

    render() {
    const style = {
        // styling to center buttons here..
    };
        return (
            <div className="App">
                <div style={style}>
                    <button onClick={()=>History.push('/boxing')}>Boxing App</button>
                    <button onClick={()=>History.push('/canvas')}>Canvas App</button>
                    <button onClick={()=>History.push('/jumping')}>Jumping App</button>
                </div>
            </div>
        );
    }
}

export default MainApp;
