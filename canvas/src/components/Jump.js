import React, {Component}
from "react";
class Jump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vel: 0,
            score: 0
        };
    }
    
    normalize = (props) => {
        let x = props.vel.x;
        let y = props.vel.y;
        const length = Math.sqrt(x * x + y * y);
        return Math.ceil(length);
    }
    ;

    componentDidMount() {
        this.jumpCheck();
    }

    reset = () => {
        this.setState({
            score: 0
        });
    }

    jumpCheck = () => {
        this.jump();
        window.requestAnimationFrame(this.jumpCheck);
    }

    jump() {
        let vel = this.normalize(this.props);
        let power = (vel - 500) / (5000 - 500) * (1000);

        if (power < 0) {
            power = 0;
        }

        if (vel > 500) {
            if (power > this.state.score) {
                var score = Math.ceil(power);
                this.setState({score: score});
            };
        }
    }

    render() {
        let vel = this.normalize(this.props);
        let power = (vel - 500) / (5000 - 500) * (1000);
        if (power < 0) {
            power = 0;
        }

        var style = {
            transform: 'translate(0px, '+-power+'px)'
        };

        return (
                <div>
                    <button onClick={this.reset}>Reset</button>
                    <h1>{this.state.score}</h1>
                    <br/>
                    <img src={require('../img/stickman.png')} style={style}/>
                </div>
                );
    }

}

export default Jump;
