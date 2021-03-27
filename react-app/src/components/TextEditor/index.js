import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class TextEditor extends Component {
    render() {
        return (
            <div className='textEditor'>
                <CKEditor/>
            </div>
        );
    }
}

export default TextEditor;