import React from 'react';
import './Editor.css';

import Toolbar from '../Toolbar/Toolbar';

const Editor = (props) => {
    
    return (
        <div className="editor">
            <Toolbar title="Editor" />
            <textarea type="text" id="editor" value={props.markdownString} onChange={props.handleChange}></textarea>
        </div>
    );
};

export default Editor;