import React, { Component } from 'react'
import './Haiku.css'

export default class Haiku extends Component {
  render() {
    return (
      <div className="haiku">
        <p dangerouslySetInnerHTML={{ __html: this.props.haiku}} />
      </div>
    )
  }
}
