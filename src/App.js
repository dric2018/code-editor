import './App.css';
import CodeEditor from './components/CodeEditor'
import CodeBlock from './components/Codeblock'
import ThemeSwitcher from './components/ThemeSwitcher'

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


function App() {
  return (
    <div className="App">

      <body className="App-container">
      <div className="btn-group">

          <button type="button" className='btn btn-dark'>Choisir Theme</button>
          
          <button type="button" className='btn btn-dark dropdown-toggle dropdown-toggle-split' data-toggle="dropdown-menu" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
        
        <div className="dropdown-menu">
        
          <a className="dropdown-item" href="#" >Theme lunimeux</a>
          <a className="dropdown-item" href="#" >Theme dark</a>
          
          <div className="dropdown-divider"></div>
          
          <a className="dropdown-item" href="#">Default Theme</a>
        </div>

      </div>     

        <div>
        <CodeBlock code ={md}/>

        </div>
      </body>

    </div>
  );
}

export default App;
