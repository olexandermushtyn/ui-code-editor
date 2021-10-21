import UC from './UC'
import { useCodeStore } from '../context/hooks'

const UCChildren = ({ innerElements, parentId }) => {
  const { components } = useCodeStore()

  return (
    <>
      {innerElements?.map(childrenId => {
        const data = components.all[childrenId]
        const ucProps = { key: childrenId, parentId, data }
        return <UC {...ucProps} />
      })}
    </>
  )
}

export default UCChildren
