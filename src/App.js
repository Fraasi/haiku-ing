import React, { Component } from 'react'
import './App.css'
import { AppContext, theme } from "./components/app-context"
import { getRanSentence, getDictSentence } from './assets/ritas'
import Haiku from './components/Haiku'
import Controls from './components/Controls'

export default class App extends Component {

  state = {
    dictHaiku: '',
    ranHaiku: '',
  }

  componentDidMount() {
    this.generateNewHaiku()
  }

  generateNewHaiku = () => {
    const firstRan = getRanSentence().join(' ')
    const secondRan = getRanSentence(7).join(' ')
    const thirdRan = getRanSentence().join(' ')
    const firstDict = getDictSentence().join(' ')
    const secondDict = getDictSentence(6).join(' ')
    const thirdDict = getDictSentence().join(' ')
    // const fourthDict = getDictSentence(6).join(' ')
    // const fifthDict = getDictSentence(6).join(' ')
    this.setState({
      dictHaiku: `${firstDict}<br/>${secondDict}<br/>${thirdDict}`,
      ranHaiku: `${firstRan}<br/>${secondRan}<br/>${thirdRan}`
    })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          theme: theme,
          haiku: this.state,
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
