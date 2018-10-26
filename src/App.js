import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Usertablecontainer from './components/Usertablecontainer';
import Chartcontainer from './components/Chartcontainer';
import Mapcontainer from './components/Mapcontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='Layout'>
            <div className='SecondLayout'>
                <Mapcontainer/>
                <Chartcontainer/>
            </div>
            <Usertablecontainer/>
        </div>

      </div>
    );
  }
}

export default App;
