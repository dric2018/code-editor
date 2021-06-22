import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

import ReactMarkdown from "react-markdown";

class CodeBlock extends Component {
  render() {
    const renderers = {
      code: ({ language, value }) => {
        return (
          <SyntaxHighlighter
            style={twilight}
            language={language}
            children={value}
          />
        );
      },
    };

    const code = `sample code\n   ~~~python
        import pandas as pd
        import tensorflow as tf 
        import torch.nn as nn

        class Classifier(nn.module):
          def __init__(self):
            super(Classifier, self).__init__()


          def forward(self, x):
            pass
          
  ~~~`;

    return (
      <ReactMarkdown
        className={"code-block"}
        renderers={renderers}
        children={this.props.code || code}
      />
    );
  }
}

export default CodeBlock;
