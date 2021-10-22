import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddMenu } from './components'
import { useCodeStore } from './context/hooks'
import UC from './components/UC'

function App() {
  const { components } = useCodeStore()
  return (
    <div className="App">
      <AddMenu />
      <div>
        {Object.keys(components.root).map(componentId => {
          console.log(components.root[componentId])
          return <UC key={componentId} data={components.root[componentId]} />
        })}
      </div>
    </div>
  )
}

export default App
