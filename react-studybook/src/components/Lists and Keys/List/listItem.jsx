import React from 'react';

function ListItem(props) {
    return (
        // Вірно! Тут не потрібно визначати ключ:
        <li>{props.value}</li>
    );
}

export default ListItem;