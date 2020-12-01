import React, { Component } from 'react';



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
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span className={`h3 mb-4 w-100 text-center text-${themeClass}`}>{ theme || "Changer le thème de l'editeur" }</span>
        
        <div className="btn-group">
        
          <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choisir' } Theme</button>
          
          <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div className="dropdown-menu">
          
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Theme lunimeux</a>
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Theme dark</a>
            
            <div className="dropdown-divider"></div>
            
            <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;