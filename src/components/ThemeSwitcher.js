import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap'


class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'outline-secondary';
    
    return (

            <center>
          
            <Dropdown>
                <Dropdown.Toggle variant={`${themeClass}`} id="dropdown-basic">
                Change theme
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-2" onClick={e => this.chooseTheme('VsDark', e)}>Dark theme</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={e => this.chooseTheme('Danger', e)}>Danger theme</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            </center>

            
            
          

    );
    
  }
  
}

export default ThemeSwitcher;