import React, { Component } from 'react'
import './App.css'
import { AppContext, theme } from "./components/app-context"
import { getRanSentence, getDictSentence } from './assets/ritas'
import Haiku from './components/Haiku'
import Controls from './components/Controls'

export default class App extends Component {

  state = {
    haiku: ''
  }

  componentDidMount() {
    this.generateNewHaiku()
  }

  generateNewHaiku = () => {
    // const first = getRanSentence().join(' ')
    // const second = getRanSentence(7).join(' ')
    // const third = getRanSentence().join(' ')
    const first = getDictSentence().join(' ')
    const second = getDictSentence(6).join(' ')
    const third = getDictSentence().join(' ')
    this.setState({
      haiku: `${first}<br/>${second}<br/>${third}`
    })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          theme: theme,
          haiku: this.state.haiku,
          generateNewHaiku: this.generateNewHaiku
        }}>
        <div className="App">
          <header className="header">
            <h3>Haiku'ing</h3>
            <p>a Haiku playground</p>
          </header>
          <Haiku />
          <Controls />
          <footer className="footer">Footer</footer>
        </div>
      </AppContext.Provider>
    )
  }
}
