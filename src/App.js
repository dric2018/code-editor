import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/CodeEditor'
import CodeBlock from './components/Codeblock'
import ThemeSwitcher from './components/ThemeSwitcher'
import { Dropdown, Button } from 'react-bootstrap'



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


const changeTheme = () =>{
  const current_theme = '';
}

const addCell = () =>{
  const workspace = document.getElementById('workspace');
  console.log('Adding cell')
}


function App() {
  return (
    <div className="App">

      <div className="App-container" id='workspace'>
        <ThemeSwitcher/>

          <div>
            <Button variant="outline-dark" onClick = { addCell() } >Code</Button>{' '}
            <Button variant="outline-warning" onClick = { addCell() } >Text</Button>{' '}

          </div>

          <div>
            <CodeBlock code ={md}/>

          </div>
      </div>

    </div>
  );
}

export default App;
