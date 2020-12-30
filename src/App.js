import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
// import GetPenduduk from './components/GetPenduduk';


class App extends Component {
  render() {    
    return (

      <BrowserRouter>
        <div> 
            <Route path="/" component={Home}/>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
