import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useCodeStore } from '../context/hooks'
import nextId from 'react-id-generator'

const AddMenu = props => {
  const { dispatch } = useCodeStore()

  const addCode = type => {
    dispatch({
      type: 'addCode',
      payload: {
        id: nextId(),
        children: [],
        name: 'div',
        parentId: 'root',
        attributes: [],
      },
    })
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        +
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Container</Dropdown.Item>
        <Dropdown.Item>Row</Dropdown.Item>
        <Dropdown.Item>Col</Dropdown.Item>
        <Dropdown.Item onClick={() => addCode('button')}>Button</Dropdown.Item>
        <Dropdown.Item>Input</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default AddMenu
