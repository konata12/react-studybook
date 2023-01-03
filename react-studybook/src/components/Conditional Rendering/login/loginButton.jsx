import React from 'react';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Увійти
        </button>
    );
}

export default LoginButton;