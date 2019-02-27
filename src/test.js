import React from 'react'
import EdiText from './'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('edit button activates editing mode', () => {
  const editext = mount(
    <EdiText
      value='Wake up Neo'
      type='text'
      onSave={val => val}
    />
  )
  expect(editext.state().editing).toEqual(false)
  editext.find(`button`).at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)
})

test('props are working fine', () => {
  const editext = mount(
    <EdiText
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  expect(editext.props().type).toEqual('text')
  expect(editext.props().value).toEqual('Wake up Neo')
  expect(editext.props().onSave).toBeInstanceOf(Function)
  expect(editext.props().hideIcons).toEqual(false)
  editext.setProps({
    type: 'textarea',
    hint: 'iamhint',
    inputProps: {
      className: 'my-class-name',
      name: 'username'
    },
    hideIcons: true
  })
  expect(editext.props().type).toEqual('textarea')
  expect(editext.props().hint).toEqual('iamhint')
  expect(editext.props().inputProps).toMatchObject({ className: 'my-class-name', name: 'username' })
  expect(editext.props().hideIcons).toEqual(true)
})

test('text input initial value is same as prop value', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')
  expect(editext.find(`input[type="text"]`).first().props().value).toEqual(editext.props().value)
})

test('editing text input updates the state', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`input[type="text"]`).first()
  editInput.instance().value = 'updated matrix'
  editInput.simulate('change')

  expect(editext.state().value).toEqual('updated matrix')
})

test('editing textarea updates the state', () => {
  const editext = mount(
    <EdiText
      type='textarea'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`textarea`)
  editInput.instance().value = 'updated matrix-2'
  editInput.simulate('change')
  expect(editext.state().value).toEqual('updated matrix-2')
})

test('cancelling reverts the input value to prop value', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  editext.find(`button`).at(0).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'updated matrix-2'
  editInput.simulate('change')

  const cancelButton = editext.find(`button`).at(1)
  expect(editext.state().value).toEqual('updated matrix-2')
  cancelButton.simulate('click')
  expect(editext.state().value).toEqual(editext.props().value)
})

test('save action sets the input value properly', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  expect(editext.state().editing).toEqual(false)

  editext.find(`button`).at(0).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'updated value.'
  editInput.simulate('change')

  const saveButton = editext.find(`button`).at(0)
  saveButton.simulate('click')

  expect(editext.state().savedValue).toEqual('updated value.')
})

test('cancel action deactivates the editing mode', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  expect(editext.state().editing).toEqual(false)

  editext.find(`button`).at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const cancelButton = editext.find(`button`).at(1)
  cancelButton.simulate('click')
  expect(editext.state().editing).toEqual(false)
})

test('save action deactivates the editing mode', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  expect(editext.state().editing).toEqual(false)
  editext.find(`button`).at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const saveButton = editext.find(`button`).at(0)
  saveButton.simulate('click')
  expect(editext.state().editing).toEqual(false)
})

test('validation prop validates the input value', () => {
  const editext = mount(
    <EdiText
      type='text'
      validationMessage='Please type at least 10 characters.'
      validation={val => val.length >= 20}
      value='The Matrix has you..'
      onSave={val => true}
    />
  )
  expect(editext.state().valid).toEqual(true)
  expect(editext.state().editing).toEqual(false)

  editext.find(`button`).at(0).simulate('click')

  const editInput = editext.find(`input[type="text"]`).at(0)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButton = editext.find(`button`).at(0)
  saveButton.simulate('click')
  expect(editext.state().valid).toEqual(false)
  expect(editext.state().editing).toEqual(true)
})

test('onValidationFail method is being triggered when validation fails', () => {
  let failedText = ''
  let isValid = true
  const validationFailed = text => {
    failedText = text
    isValid = false
  }
  expect(isValid).toEqual(true)
  expect(failedText).toEqual('')

  const editext = mount(
    <EdiText
      type='text'
      validation={val => val.length >= 20}
      onValidationFail={validationFailed}
      value='The Matrix has you..'
      onSave={val => true}
    />
  )
  expect(editext.state().valid).toEqual(true)
  expect(editext.state().editing).toEqual(false)

  editext.find(`button`).at(0).simulate('click')

  const editInput = editext.find(`input[type="text"]`).at(0)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButton = editext.find(`button`).at(0)
  saveButton.simulate('click')

  expect(isValid).toEqual(false)
  expect(failedText).toEqual(editext.state().value)
  expect(editext.state().value).toEqual('matrix')
  expect(editext.state().valid).toEqual(false)
  expect(editext.state().editing).toEqual(true)
})

test('custom button titles are set properly', () => {
  const editext = mount(
    <EdiText
      type='text'
      saveButtonContent='Apply'
      cancelButtonContent='Cancel'
      editButtonContent='Edit'
      value='Why, Mr. Anderson? Why? Why do you persist?'
      onSave={val => true}
    />
  )
  const editButton = editext.find(`button`).at(0)
  expect(editButton.text()).toEqual(editext.props().editButtonContent)
  editButton.simulate('click')

  const saveButton = editext.find(`button`).at(0)

  const cancelButton = editext.find(`button`).at(1)

  expect(saveButton.text()).toEqual(editext.props().saveButtonContent)
  expect(cancelButton.text()).toEqual(editext.props().cancelButtonContent)
})
