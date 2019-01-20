import React, { Component } from 'react'
import './App.css'
import { getSentence } from './assets/ritas'
import Haiku from './components/Haiku'
import Controls from './components/Controls'

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
          <p>a Haiku playground</p>
        </header>
        <Haiku haiku={this.state.haiku} />
        <Controls generateNewHaiku={this.generateNewHaiku} />
        <footer className="footer">Footer</footer>
      </div>
    )
  }
}
