import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h3>Haiku'ing</h3>
          <p>Random word Haiku generator</p>
        </header>
        <div className="haiku">
          Haiku here will be<br/>
          eventually rain<br/>
          wets the poem paper<br/>
        </div>
        <div className="controls">
          Controls here, markov it?
        </div>
        <footer className="footer">Footer</footer>
      </div>
    )
  }
}
