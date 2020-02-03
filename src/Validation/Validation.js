import React from 'react';

function Validation(props) {
    let validateMessage = null;
    if (props.textLength >= 5) {
        validateMessage = (<p>Text long enough</p>);
    } else {
        validateMessage = (<p>Text too short</p>);
    }
    return (
        <div>
            <p>{props.textLength}</p>
            {validateMessage}
        </div>
    );
}

export default Validation;