import React from 'react';

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Вийти
        </button>
    );
}

export default LogoutButton;