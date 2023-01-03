import React from 'react';
import ListItem from './listItem';

function NumberList(props) {
    if (!props.render) {
        return null;
    }

    const numbers = [1, 2, 3, 4, 5];
    
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                value={number} />
            )}
        </ul>
    );
}

export default NumberList;