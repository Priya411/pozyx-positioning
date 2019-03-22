import React, {Component} from 'react';
import CanvasDraw from '../components/CanvasDraw';
import './App.css';

class CanvasApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: {},
            accelereation: 0,
            velocity: {}
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
            if (update[0].success && update[0] !== null) {
                this.setState({
                    coordinates: update[0].data.coordinates,
                    velocity: update[0].data.velocity
                });
                //console.log(this.state.velocity);
                //console.log(update[0].data.tagData.accelerometer[0]);

                const normlizedAcceleration = this.normalize(update[0].data.tagData.accelerometer[0][0],
                    update[0].data.tagData.accelerometer[0][1],
                    update[0].data.tagData.accelerometer[0][2]);

                this.setState({accelereation: normlizedAcceleration});
                //Set the state of acceleration

                //console.log(normlizedAcceleration);

            }


            // To get a JavaScript object, use
        });
    }

    normalize = (x, y, z) => {
        const length = Math.sqrt(x * x + y * y + z * z);
        return Math.ceil(length);
    }
    ;

    render() {

        return (
            <div className="App">
                <CanvasDraw cord={this.state.coordinates} acc={this.state.accelereation} vel={this.state.velocity}/>
            </div>
        );
    }
}

export default CanvasApp;
