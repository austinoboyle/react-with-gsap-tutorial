import React, {Component} from 'react';
import {Transition} from 'react-transition-group';
import animations from './Fade.animate';
import './Fade.css';

export default class Fade extends Component{
    constructor(props){
        super(props);
        this.state = {
            in: true
        };
    }

    toggleIn() {
        this.setState({in: !this.state.in});
    }

    render() {
        const {duration} = this.props;
        return (
            <Transition
                appear
                in={this.state.in}
                onEnter={(el) => animations.enter(el, duration.enter)}
                onExit={(el) => animations.exit(el, duration.exit)}
                onExited={this.props.remove}
                timeout={{
                    enter: duration.enter * 1000,
                    exit: duration.exit * 1000
                }}
            >
                <div onClick={() => this.toggleIn()} className="fade">
                    I am a Fade Component
                </div>
            </Transition>
        );
    }
};

Fade.defaultProps = {
    duration: {
        enter: 0.5,
        exit: 0.5
    }
};