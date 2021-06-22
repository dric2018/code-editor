import MEDitor, { commands } from "@uiw/react-md-editor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { Component } from "react";
import "katex/dist/katex.css";

class EditorV2 extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      editorState: "",
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(newEditorState) {
    this.setState({
      editorState: newEditorState,
    });
  }

  render() {
    const { editorState } = this.state;

    const renderers = {
      code: ({ language, value }) => {
        return (
          <SyntaxHighlighter
            style={tomorrow}
            language={language}
            children={value}
          />
        );
      },
    };

    return (
      <div className="container">
        <MEDitor
          hideToolbar={true}
          height={450}
          value={editorState}
          onChange={this.onEditorStateChange}
          commands={[commands.codeEdit, commands.codeLive]}
          previewOptions={{ renderers: renderers }}
        />
      </div>
    );
  }
}

export default EditorV2;
