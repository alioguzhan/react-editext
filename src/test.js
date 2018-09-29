import React from 'react'
import EdiText from './'
import {configure, mount} from 'enzyme'
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
  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')
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
  editext.setProps({ type: 'textarea' })
  expect(editext.props().type).toEqual('textarea')
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
  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'updated matrix-2'
  editInput.simulate('change')

  const cancelButtonClassName = editext.props().cancelButtonClassName
  const cancelButton = editext.find(`button.${cancelButtonClassName}`)
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

  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'updated value.'
  editInput.simulate('change')

  const saveButtonClassName = editext.props().saveButtonClassName
  const saveButton = editext.find(`button.${saveButtonClassName}`)
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

  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const cancelButtonClassName = editext.props().cancelButtonClassName
  const cancelButton = editext.find(`button.${cancelButtonClassName}`)
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

  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const saveButtonClassName = editext.props().saveButtonClassName
  const saveButton = editext.find(`button.${saveButtonClassName}`)
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

  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButtonClassName = editext.props().saveButtonClassName
  const saveButton = editext.find(`button.${saveButtonClassName}`)
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

  const editButtonClassName = editext.props().editButtonClassName
  editext.find(`button.${editButtonClassName}`).simulate('click')

  const editInput = editext.find(`input[type="text"]`)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButtonClassName = editext.props().saveButtonClassName
  const saveButton = editext.find(`button.${saveButtonClassName}`)
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
      saveButtonText='Apply'
      cancelButtonText='Cancel'
      editButtonText='Edit'
      value='Why, Mr. Anderson? Why? Why do you persist?'
      onSave={val => true}
    />
  )
  const editButtonClassName = editext.props().editButtonClassName
  const editButton = editext.find(`button.${editButtonClassName}`)
  editButton.simulate('click')

  const saveButtonClassName = editext.props().saveButtonClassName
  const saveButton = editext.find(`button.${saveButtonClassName}`)

  const cancelButtonClassName = editext.props().cancelButtonClassName
  const cancelButton = editext.find(`button.${cancelButtonClassName}`)

  expect(editButton.text()).toEqual(editext.props().editButtonText)
  expect(saveButton.text()).toEqual(editext.props().saveButtonText)
  expect(cancelButton.text()).toEqual(editext.props().cancelButtonText)
})
