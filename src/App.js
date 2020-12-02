import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeBlock from './components/Codeblock';
import MyEditor from './components/CodeEditor';
import ThemeSwitcher from './components/ThemeSwitcher'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
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


const md = ` Enter your code here

~~~js

const fn = (name) =>{
    return "hello" + name
}

~~~
`

 <div>
            <Button variant="outline-dark" >Code</Button>{' '}
            <Button variant="outline-warning" >Text</Button>{' '}

          </div>

*/

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


function App() {
  return (
    <div className="App">
    <div className="App-header">
      <h3>Simple code editor with draft-js</h3>
    </div>

      <div className="App-container" id='workspace'>
        <ThemeSwitcher/>{' '}

        <div className='container'>

        <div className='row'>
          <div className='col m6'>
            <div className='card-panel'>
                <MyEditor/>
            </div>
          </div>

          <div className='col m6'>
            <div className='card-panel'>
                <h3>HTML translation</h3>
            </div>
          </div>
        </div>


         
        </div>

      </div>

  

    </div>
  );
}

export default App;
