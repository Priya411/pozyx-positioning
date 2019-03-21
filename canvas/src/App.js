import React, { Component } from 'react';
import CanvasDraw from './components/CanvasDraw';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coordinates: {}
        }
    }

    componentDidMount() {
        const mqtt = require('mqtt');

        const HOST = 'wss://mqtt.cloud.pozyxlabs.com';
        const PORT = '443';
        const TOPIC = '5bd0948cbc0fb66be9d64bba/2394486703';
        const USERNAME = '5bd0948cbc0fb66be9d64bba';
        const PASSWORD = 'ac1c289f-de25-468c-a87a-26b516e6c9dd';

        const client = mqtt.connect(`${HOST}:${PORT}`, {
            username: USERNAME,
            password: PASSWORD,
            keepalive: 5, // Default is 60 seconds
            reconnectPeriod: 1000 // The client will automatically reconnect. This options defines the time between reconnects.
        });
        client.subscribe(TOPIC);

        client.on('connect', () => {
            console.info('Connected to local MQTT server!');
        });

        client.on('reconnect', () => {
            console.info('Reconnecting...');
        });

        client.on('message', (topic, message) => {
            const update = JSON.parse(message.toString());

            //console.info(message.toString());
            if(update[0].success){
                this.setState({coordinates: update[0].data.coordinates})
              //  console.log(this.state.coordinates);
            }
            // To get a JavaScript object, use
        });
    }

    render() {
        

        
        return (
                <div className="App">
                    <CanvasDraw cord={this.state.coordinates}/>
                </div>
                );
    }
}

export default App;
