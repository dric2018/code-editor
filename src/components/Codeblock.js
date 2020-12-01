import React, { Component } from "react";
import {render} from 'react-dom';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, vs, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

import ReactMarkdown from 'react-markdown';





class CodeBlock extends Component {

    

    render(){

        const theme = `${vs}`

        const renderers = {
            code: ({language, value}) => {
              return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
            }
          }
        
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