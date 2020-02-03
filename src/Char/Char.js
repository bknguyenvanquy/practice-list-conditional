import React from 'react';

function Char(props) {
    const style = {
        display: 'inline-block',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        padding: '16px'
      };
    return (
        <span style={style} onClick={props.clicked}>
            {props.char}
        </span>
    );
}

export default Char;