import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => {
    return (
        <div className="toobar">
            <h3>{props.title}</h3>
        </div>
    );
}

export default Toolbar;