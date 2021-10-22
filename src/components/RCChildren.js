import { useCodeStore } from '../context/hooks'
import UC from './UC'

// Root component child

const RCChildren = ({ rootId }) => {
  const { components } = useCodeStore()

  return (
    <>
      {Object.keys(components.root).map(componentId => {
        return <UC key={componentId} data={components.root[componentId]} />
      })}
    </>
  )
}

export default RCChildren
