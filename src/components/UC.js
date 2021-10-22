import UCChildren from './UCChildren'
import usedComponents from '../usedComponents'
import { AddMenu } from '.'

const UC = ({ data }) => {
  console.log(data?.name)
  const parentId = data?.id
  const Component = usedComponents[data?.name]
  if (
    data?.name === 'Container' ||
    data?.name === 'Row' ||
    data?.name === 'Col'
  )
    return (
      <Component>
        <AddMenu rcId={data?.id} />
        {data?.text}
        <UCChildren innerElements={data?.children} parentId={parentId} />
      </Component>
    )
  else
    return (
      <Component>
        <UCChildren innerElements={data?.children} parentId={parentId} />
      </Component>
    )
}

export default UC
