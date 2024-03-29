import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
