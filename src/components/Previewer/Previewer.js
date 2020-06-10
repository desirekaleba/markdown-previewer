import React from 'react';
import marked from 'marked';
import './Previewer.css';

import Toolbar from '../Toolbar/Toolbar';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: true
});
const Previewer = (props) => {
    return ( 
        <div>
            <div className="previewer">
                <Toolbar title="Previewer" />
                <div id="preview"
                dangerouslySetInnerHTML = {
                    {
                        __html: marked(props.markdownString)
                    }
                }
                />
            </div>
        </div>
    );
};

export default Previewer;