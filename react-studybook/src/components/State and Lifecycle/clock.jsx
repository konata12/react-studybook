import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        if (!this.props.render) {
            return null;
        }
        
        return (
            <div>
                <h1>Привіт, світе!</h1>
                <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;