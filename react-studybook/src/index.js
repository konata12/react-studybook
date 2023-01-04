import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/State and Lifecycle/clock';
import Toggle from './components/Handling events/toggle';
import LoginControl from './components/Conditional Rendering/login/loginControl';
import Page from './components/Conditional Rendering/page';
import NumberList from './components/Lists and Keys/List/numberList';
import Blog from './components/Lists and Keys/Blog/blog';
import NameForm from './components/Forms/Input/nameForm';
import EssayForm from './components/Forms/Textarea/essayForm';
import FlavorForm from './components/Forms/Select/flavorForm';
import Reservation from './components/Forms/Handling Multiple Inputs/reservation';

function App(props) {
    const render = 0;
    return (
        <div className='app'>
            <Clock render={render}/>
            <Toggle render={render}/>
            <LoginControl render={render}/>
            <Page render={render}/>
            <NumberList render={render}/>
            <Blog render={render}/>
            <NameForm render={render}/>
            <EssayForm render={render}/>
            <FlavorForm render={render}/>
            <Reservation />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)