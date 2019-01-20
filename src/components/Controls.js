import React, { Component } from 'react'

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <button onClick={this.props.generateNewHaiku}>generate new Haiku</button>
      </div>
    )
  }
}
