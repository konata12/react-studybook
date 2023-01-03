import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/State and Lifecycle/clock';
import Toggle from './components/Handling events/toggle';
import LoginControl from './components/Conditional Rendering/login/loginControl';
import Page from './components/Conditional Rendering/page';

function App(props) {
    return (
        <div className='app'>
            <Clock />
            <Toggle />
            <LoginControl />
            <Page />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)