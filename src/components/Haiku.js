import React, { Component } from 'react'
import { AppContext } from "./app-context"
import './Haiku.css'

export default class Haiku extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="haiku">
            Random Haiku
            <p dangerouslySetInnerHTML={{ __html: context.haiku.ranHaiku }} />
            <hr />
            Dictionary Haiku
            <p dangerouslySetInnerHTML={{ __html: context.haiku.dictHaiku }} />
          </div>
        )
        }
      </AppContext.Consumer>
    )
  }
}

// or
// export default class Haiku extends Component {
//   static contextType = AppContext
//   render() {
//     return (
//       <div className="haiku">
//         <p dangerouslySetInnerHTML={{ __html: this.context.haiku}} />
//       </div>
//     )
//   }
// }

