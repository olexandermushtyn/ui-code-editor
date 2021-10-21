import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CodeProvider } from './context'

ReactDOM.render(
  <CodeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CodeProvider>,
  document.getElementById('root')
)
