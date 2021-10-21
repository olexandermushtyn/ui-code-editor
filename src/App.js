import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddMenu } from './components'
import { useCodeStore } from './context/hooks'
import RC from './components/RC'

function App() {
  const { components } = useCodeStore()
  console.log(Object.keys({ ...components.root }))
  return (
    <div className="App">
      <AddMenu />
      <div className="container">
        {Object.keys({ ...components.root }).map(() => {
          return <RC name />
        })}
      </div>
    </div>
  )
}

export default App
