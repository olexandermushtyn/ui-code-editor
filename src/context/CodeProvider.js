import { useReducer } from 'react'
import { reducer } from './reducer'
import CodeContext from './CodeContext'

const CodeProvider = ({ children }) => {
  const [components, dispatch] = useReducer(reducer, {
    root: {},
    all: {},
  })

  console.log(components)

  return (
    <CodeContext.Provider value={{ components, dispatch }}>
      {children}
    </CodeContext.Provider>
  )
}

export default CodeProvider
