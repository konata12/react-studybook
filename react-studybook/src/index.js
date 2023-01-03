import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/State and Lifecycle/clock';
import Toggle from './components/Handling events/toggle';
import LoginControl from './components/Conditional Rendering/login/loginControl';
import Page from './components/Conditional Rendering/page';
import NumberList from './components/Lists and Keys/List/numberList';
import Blog from './components/Lists and Keys/Blog/blog';

function App(props) {
    const render = true;
    return (
        <div className='app'>
            <Clock render={render}/>
            <Toggle render={render}/>
            <LoginControl render={render}/>
            <Page render={render}/>
            <NumberList render={render}/>
            <Blog render={render}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)