import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeBlock from "./components/Codeblock";
import MyEditor from "./components/CodeEditor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorV2 from "./components/CodeMarkdownEditor";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Simple code editor with draft-js</h3>
      </div>

      <div className="App-container" id="workspace">
        <h2>with Draft js</h2>

        <div className="container">
          <div className="row">
            <div className="col m6">
              <div className="card-panel">
                <MyEditor />
              </div>
            </div>

            <div className="col m6">
              <div className="card-panel">
                <h3>HTML translation</h3>
              </div>
            </div>
          </div>
          <h2>with React markdown</h2>

          <CodeBlock></CodeBlock>

          <h2>with React markdown editor</h2>
          <EditorV2 />
        </div>
      </div>
    </div>
  );
}

export default App;
