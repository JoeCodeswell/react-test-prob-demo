import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { testlist, testobj, testobjlist } from './m/data.mjs';

const tlist = testlist;
const tobj = testobj;
const tobjlist = testobjlist;


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mylist: tlist,
      myobj: tobj,
      myobjlist: tobjlist,
      
    }
  }
  render() {
    const {mylist, myobj, myobjlist} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="content" style={{marginLeft: 2 + 'em', textAlign: 'left'}}>
          <h2>testlist</h2>
            <pre>
            {"'mylist: '+JSON.stringify(mylist)"}<br/> 
            {'mylist: '+JSON.stringify(mylist)}<br/>
            </pre>
          <h2>testobj</h2>
            <pre>
            {"'myobj: '+JSON.stringify(myobj)"}<br/> 
            {'myobj: '+JSON.stringify(myobj)}<br/>              
            </pre>
          <h2>testobjlist</h2>
            <pre>
            {"'myobjlist: '+JSON.stringify(myobjlist)"}<br/> 
            {'myobjlist: '+JSON.stringify(myobjlist)}<br/>                            
            </pre>

        </div>
      </div>
    );
  }
}

export default App;
