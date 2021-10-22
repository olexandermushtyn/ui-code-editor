import RCChildren from './RCChildren'
import { AddMenu } from '.'

//Root component (container)

const RC = ({ id }) => {
  console.log(id)
  return (
    <>
      <AddMenu rcId={id} />
    </>
  )
}

export default RC
