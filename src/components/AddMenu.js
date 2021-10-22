import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useCodeStore } from '../context/hooks'
import nextId from 'react-id-generator'

const AddMenu = ({ rcId }) => {
  const { dispatch } = useCodeStore()

  const addCode = event => {
    console.log(event.currentTarget.innerHTML)
    const generatedId = nextId()
    let parentId
    if (event.currentTarget.innerHTML === 'Container') {
      parentId = undefined
    } else {
      parentId = rcId
    }
    dispatch({
      type: 'addCode',
      payload: {
        id: generatedId,
        children: [],
        name: event.currentTarget.innerHTML,
        parentId: parentId,
        attributes: [],
        text: event.currentTarget.innerHTML + ' ' + generatedId,
      },
    })
  }
  if (!rcId) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          +
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={event => addCode(event)}>
            Container
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  } else {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          +
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={event => addCode(event)}>Row</Dropdown.Item>
          <Dropdown.Item onClick={event => addCode(event)}>Col</Dropdown.Item>
          <Dropdown.Item onClick={event => addCode(event)}>
            Button
          </Dropdown.Item>
          <Dropdown.Item onClick={event => addCode(event)}>Input</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
export default AddMenu
