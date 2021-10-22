import UC from './UC'
import { useCodeStore } from '../context/hooks'

const UCChildren = ({ innerElements, parentId }) => {
  const { components } = useCodeStore()

  return (
    <>
      {innerElements?.map(childrenId => {
        console.log(childrenId)
        const data = components.all[childrenId.id]
        console.log(data)
        const ucProps = { key: childrenId, parentId, data }
        return <UC {...ucProps} />
      })}
    </>
  )
}

export default UCChildren
