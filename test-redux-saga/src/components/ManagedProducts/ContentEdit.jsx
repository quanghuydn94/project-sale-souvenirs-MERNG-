import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const ContentEditor = ({ handleChangeEditor }) => {
    // const [content, setContent] = useState('');
    // const handleChange = (content) => {
    //     setContent(content);
    // };

    return (
        <div>
            <SunEditor
                onChange={handleChangeEditor}
                setDefaultStyle="height: auto"
                setOptions={{
                    height: 400,
                    buttonList: [
                        [
                            'formatBlock',
                            'font',
                            'fontSize',
                            'fontColor',
                            'align',
                            'paragraphStyle',
                            'blockquote',
                        ],
                        [
                            'bold',
                            'underline',
                            'italic',
                            'strike',
                            'subscript',
                            'superscript',
                        ],
                        ['removeFormat'],
                        ['outdent', 'indent'],
                        ['table', 'list'],
                        ['link', 'image', 'video'],
                    ],
                }}
            />
        </div>
    );
};
export default ContentEditor;
