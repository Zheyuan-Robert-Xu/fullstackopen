import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
ReactDOM.render(<App />, document.getElementById('root')) //renders its contents into the div-element, defined in the file public/index.html, having the id value 'root'.
