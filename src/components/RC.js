import RCChildren from './RCChildren'
import { AddMenu } from '.'

//Root component (container)

const RC = ({ name }) => {
  return (
    <>
      <AddMenu />
      <RCChildren />
    </>
  )
}

export default RC
