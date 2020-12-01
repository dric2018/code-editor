import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark, coy} from 'react-syntax-highlighter/dist/esm/styles/prism'


const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
  }

  const md = ` can you see this javascript code ?
  ~~~R
  df <- read.table('');
  ~~~
  `

const CodeEditor = () =>{
    return <ReactMarkdown renderers = {renderers} children={md}/>
        

    
}  


export default CodeEditor;