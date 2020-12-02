import React, { Component } from 'react';
import {convertToRaw, draftToHtml, EditorState} from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';

const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
};

class MyEditor extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
      html : ''
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    
    
  }




  onEditorStateChange(editorState){
    this.setState({
      editorState : editorState,
      //html: draftToHtml( convertToRaw( editorState.getCurrentContent() ) )
    });
  }



  render(){
    return (
      <div style={styles.editor} >
          <Editor
          editorState={this.state.editorState}
          placeholder = {'Enter your text here'}
          onEditorStateChange={
            this.onEditorStateChange
            }
          />
      </div>

    ) 
  }



}


export default MyEditor;