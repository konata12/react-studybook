import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import Tick from './components/tick';

function App(props) {
    return (
        <Clock />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

// function tick() {
//     root.render(<App />);
// }
// setInterval(tick, 1000);