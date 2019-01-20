import React, { Component } from 'react'
import './App.css'
import { getSentence } from './assets/ritas'
import Haiku from './components/Haiku.jsx'
import Controls from './components/Controls.jsx'

export default class App extends Component {

  state = {
    haiku: ''
  } 

  componentDidMount() {
    this.generateNewHaiku()
  }

  generateNewHaiku =() => {
    const first = getSentence().join(' ')
    const second = getSentence(7).join(' ')
    const third = getSentence().join(' ')
    this.setState({
      haiku: `${first}<br/>${second}<br/>${third}`
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h3>Haiku'ing</h3>
          <p>Random word Haiku generator/<br/>
          build your own Haiku
          </p>
        </header>
        <Haiku haiku={this.state.haiku} />
        <Controls generateNewHaiku={this.generateNewHaiku} />
        

        <footer className="footer">Footer</footer>
      </div>
    )
  }
}
