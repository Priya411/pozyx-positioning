import React, {Component}
    from "react";

class Boxing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acceleration: this.props.acc,
            score: 0,
            maxAcc: 0
        };
    }

    componentDidMount() {
        this.onBunch();
    }

    reset = () => {
        this.setState({
            score: 0
        });
    };

    onBunch = () => {
        this.punch();
        window.requestAnimationFrame(this.onBunch);
    };

    punch() {
        let acc = this.props.acc;
        let power = (acc - 2000) / (3500 - 2000) * (500);

        if (power < 0) {
            power = 0;
        }

        if (acc > 1500) {
            if (power > this.state.score) {
                var score = Math.ceil(power);
                this.setState({score: score});
            }
        }
    }

    render() {
        let acc = this.props.acc;
        let power = (acc - 2000) / (5000 - 2000) * (90);
        if (power < 0) {
            power = 0;
        }

        let style = {
            transform: 'rotate(' + power + 'deg)',
            transition: '.5s'
        };

        return (
            <div>
                <button onClick={this.reset}>Reset</button>
                <h1>{this.state.score}</h1>
                <br/>
                <img src={require('../img/bag.jpg')} style={style}/>
            </div>
        );
    }

}

export default Boxing;
