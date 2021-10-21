import UCChildren from './UCChildren'

const UC = ({ data }) => {
  const parentId = data.id

  const Component = <data.name />
  return (
    <Component>
      {data.text}
      <UCChildren innerElements={data?.children} parentId={parentId} />
    </Component>
  )
}

export default UC
