import React from 'react'
import ReactDOM from 'react-dom'

let App = React.createClass({
  render () {
    return (
      <div>Hello React</div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
