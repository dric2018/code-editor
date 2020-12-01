import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/CodeEditor'
import CodeBlock from './components/Codeblock'
import ThemeSwitcher from './components/ThemeSwitcher'
import { Dropdown, Button } from 'react-bootstrap'
import React from 'react-dom';



/*

const md = ` can you see this python code ?

~~~python
import pandas as pd
import tensorflow as tf 
import torch.nn as nn

class Classifier(nn.module):
  def __init__(self):
    super(Classifier, self).__init__()


  def forward(self, x):
    pass


~~~
`
*/

const md = ` Enter your code here

~~~js

const fn = (name) =>{
    return "hello" + name
}

~~~
`


function App() {
  return (
    <div className="App">

      <div className="App-container" id='workspace'>
        <ThemeSwitcher/>

          <div>
            <Button variant="outline-dark" >Code</Button>{' '}
            <Button variant="outline-warning" >Text</Button>{' '}

          </div>

          <div>
            <CodeBlock code ={md}/>

          </div>
      </div>

    </div>
  );
}

export default App;
