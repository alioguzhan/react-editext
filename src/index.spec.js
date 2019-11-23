import React from 'react'
import EdiText from '.'
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
  editext.find('button').at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)
})

test('editing prop activates editing mode', () => {
  const editext = mount(
    <EdiText
      value='Wake up Neo'
      type='text'
      onSave={val => val}
      editing={true}
    />
  )
  expect(editext.state().editing).toEqual(true)
  const cancelButton = editext.find('button').at(1)
  cancelButton.simulate('click')
  expect(editext.state().editing).toEqual(false)
})

test('view click activates editing mode', () => {
  const editext = mount(
    <EdiText
      value='Wake up Neo'
      type='text'
      editOnViewClick={true}
      viewProps={{ id: 'viewdiv' }}
      onSave={val => val}
    />
  )
  expect(editext.state().editing).toEqual(false)
  editext.find('#viewdiv').at(0).simulate('click')
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
  expect(editext.props().showButtonsOnHover).toEqual(undefined)
  expect(editext.props().buttonsAlign).toEqual('after')
  // ---
  expect(editext.props().cancelButtonContent).toEqual('')
  expect(editext.props().saveButtonContent).toEqual('')
  expect(editext.props().editButtonContent).toEqual('')
  // ---
  expect(editext.props().cancelButtonClassName).toEqual(undefined)
  expect(editext.props().saveButtonClassName).toEqual(undefined)
  expect(editext.props().editButtonClassName).toEqual(undefined)
  // ---
  expect(editext.props().editContainerClassName).toEqual(undefined)
  expect(editext.props().mainContainerClassName).toEqual(undefined)
  expect(editext.props().viewContainerClassName).toEqual(undefined)

  editext.setProps({
    type: 'textarea',
    hint: 'iamhint',
    inputProps: {
      className: 'my-class-name',
      name: 'username'
    },
    hideIcons: true,
    editing: true,
    showButtonsOnHover: true,
    buttonsAlign: 'before',
    cancelButtonContent: 'revert',
    saveButtonContent: 'apply',
    editButtonContent: 'modify',
    cancelButtonClassName: 'cancel-class',
    saveButtonClassName: 'save-class',
    editButtonClassName: 'edit-class',
    mainContainerClassName: 'main-c-class',
    editContainerClassName: 'edit-c-class',
    viewContainerClassName: 'view-c-class'
  })
  expect(editext.props().type).toEqual('textarea')
  expect(editext.props().hint).toEqual('iamhint')
  expect(editext.props().inputProps).toMatchObject({ className: 'my-class-name', name: 'username' })
  expect(editext.props().hideIcons).toEqual(true)
  expect(editext.props().showButtonsOnHover).toEqual(true)
  expect(editext.props().buttonsAlign).toEqual('before')
  expect(editext.props().cancelButtonContent).toEqual('revert')
  expect(editext.props().saveButtonContent).toEqual('apply')
  expect(editext.props().editButtonContent).toEqual('modify')
  expect(editext.props().cancelButtonClassName).toEqual('cancel-class')
  expect(editext.props().saveButtonClassName).toEqual('save-class')
  expect(editext.props().editButtonClassName).toEqual('edit-class')
  expect(editext.props().editContainerClassName).toEqual('edit-c-class')
  expect(editext.props().mainContainerClassName).toEqual('main-c-class')
  expect(editext.props().viewContainerClassName).toEqual('view-c-class')
})

test('text input initial value is same as prop value', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )
  expect(editext.state().value).toEqual('Wake up Neo')
})

test('editing text input updates the state', () => {
  const editext = mount(
    <EdiText
      type='text'
      value='Wake up Neo'
      onSave={val => true}
    />
  )

  editext.find('button').simulate('click')

  const editInput = editext.find('input[type="text"]').first()
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
  editext.find('button').simulate('click')
  const editInput = editext.find('textarea')
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
  editext.find('button').at(0).simulate('click')

  const editInput = editext.find('input[type="text"]')
  editInput.instance().value = 'updated matrix-2'
  editInput.simulate('change')

  const cancelButton = editext.find('button').at(1)
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

  editext.find('button').at(0).simulate('click')

  const editInput = editext.find('input[type="text"]')
  editInput.instance().value = 'updated value.'
  editInput.simulate('change')

  const saveButton = editext.find('button').at(0)
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

  editext.find('button').at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const cancelButton = editext.find('button').at(1)
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
  editext.find('button').at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)

  const saveButton = editext.find('button').at(0)
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

  editext.find('button').at(0).simulate('click')

  const editInput = editext.find('input[type="text"]').at(0)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButton = editext.find('button').at(0)
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

  editext.find('button').at(0).simulate('click')

  const editInput = editext.find('input[type="text"]').at(0)
  editInput.instance().value = 'matrix' // this is less then 10 chars.
  editInput.simulate('change')

  const saveButton = editext.find('button').at(0)
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
  const editButton = editext.find('button').at(0)
  expect(editButton.text()).toEqual(editext.props().editButtonContent)
  editButton.simulate('click')

  const saveButton = editext.find('button').at(0)

  const cancelButton = editext.find('button').at(1)

  expect(saveButton.text()).toEqual(editext.props().saveButtonContent)
  expect(cancelButton.text()).toEqual(editext.props().cancelButtonContent)
})

test('state listens to prop changes', () => {
  const editext = mount(
    <EdiText
      type='text'
      saveButtonContent='Apply'
      cancelButtonContent='Cancel'
      editButtonContent='Edit'
      value='Neo'
      editing={true}
      onSave={val => true}
    />
  )
  expect(editext.state().value).toEqual('Neo')
  editext.setProps({ value: 'Tank' })
  expect(editext.state().value).toEqual('Tank')

  expect(editext.state().editing).toEqual(true)
  editext.setProps({ editing: false })
  expect(editext.state().editing).toEqual(false)
})

test('pressing Enter saves the form', () => {
  const onSave = v => v
  const editext = mount(
    <EdiText
      type='text'
      submitOnEnter={true}
      onSave={onSave}
    />
  )

  const handleSave = jest.spyOn(editext.instance(), 'handleSave')
  editext.instance().forceUpdate()

  expect(editext.state().editing).toEqual(false)
  editext.find('button').at(0).simulate('click')
  expect(editext.state().editing).toEqual(true)

  expect(handleSave.mock.calls.length).toBe(0)

  const editInput = editext.find('input[type="text"]').at(0)
  editInput.instance().value = 'matrix'
  editInput.simulate('change')
  editInput.simulate('keyDown', { keyCode: 'Enter' })
  expect(editext.state().editing).toEqual(false)
  expect(editext.state().value).toEqual('matrix')
  expect(editext.state().savedValue).toEqual('matrix')
  expect(handleSave.mock.calls.length).toBe(1)
})
