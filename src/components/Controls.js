import React, { Component } from 'react'
import { AppContext } from './app-context'

export default class Controls extends Component {
  static contextType = AppContext
  render() {
    return (
      <div className="controls">
        <button onClick={this.context.generateNewHaiku}>generate new Haiku</button>
      </div>
    )
  }
}
