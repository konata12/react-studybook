import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
  
        // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
        // this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
        console.dir(e)
        console.dir(this)
        
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
  
    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
  }

export default Toggle;