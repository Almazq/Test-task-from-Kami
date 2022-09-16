import React, { useState } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

function Wysiwyg (props) {
  const [state, setState] = useState(convertFromRaw(content))
  function onContentStateChange(contentState){
    setState({contentState,})
  }

    const { contentState } = state;
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={onContentStateChange}
        />
      </div>
    );
}
export default Wysiwyg;
