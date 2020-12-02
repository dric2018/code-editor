import MEDitor from '@uiw/react-md-editor';

import React, {Component} from 'react';

const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em',
      padding: "50px 0 0 0" 
    }
  };
const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`python
import tensorflow as tf
import torch.nn as nn

class Classifier(nn.module)

\`\`\`
`;


class EditorV2 extends Component {
    constructor(props, context){
        super(props);

        this.state = {
            editorState : ''
        }

        this.onEditorStateChange = this.onEditorStateChange.bind(this);

    }

    onEditorStateChange(editorState){
        this.setState({
          editorState : editorState,
        });
      }
    render(){
        return (
            <div className='container'>
                <MEDitor height={200} value={this.editorState} onChange={this.onEditorStateChange} />
            </div>

        );
    }
}

export default EditorV2;