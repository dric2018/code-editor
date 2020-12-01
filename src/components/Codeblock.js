import React, { Component } from "react";
import {render} from 'react-dom';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

import ReactMarkdown from 'react-markdown';

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={vs} language={language} children={value} />
    }
  }




class CodeBlock extends Component {

    render(){
        const code = ` Enter your code here

        ~~~js

        const fn = (name) =>{
            return "hello" + name
        }

        ~~~
        `;


        return <ReactMarkdown renderers = {renderers} children={this.props.code || code}/>

    }
}


export default CodeBlock;