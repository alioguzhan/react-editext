import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import React, { useState } from 'react';
import EdiText from '.';
import { cancelOnConflictMessage } from './utils';
import userEvent from '@testing-library/user-event';

function Controlled() {
  const [editing, setEditing] = useState(true);
  return (
    <>
      <button onClick={() => setEditing((e) => !e)}>toggle</button>
      <EdiText value={VALUE} editing={editing} onSave={() => false} />
    </>
  );
}

const VALUE = 'Hello World';

test('renders without error', () => {
  render(<EdiText value={VALUE} onSave={() => false} />);
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('pressing edit button activates edit mode', () => {
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('pressing cancel button cancels the edit mode', () => {
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  const cancelBtn = container.querySelector('[editext="cancel-button"]');
  cancelBtn && fireEvent.click(cancelBtn, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
});

test('pressing save button saves the value', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('Pressing Enter saves the value', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} submitOnEnter onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('Pressing Escape cancels the edit mode', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} cancelOnEscape onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.keyDown(input, { key: 'Escape', code: 'Esc' });
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('Edit mode becomes active when clicked on the text', () => {
  const { container } = render(
    <EdiText value={VALUE} editOnViewClick onSave={() => false} />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  viewContainer && fireEvent.click(viewContainer, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('Hint message does appear in edit mode', () => {
  const hint = 'At least 8 characters...';
  const { container } = render(
    <EdiText value={VALUE} hint={hint} onSave={() => false} />
  );
  try {
    expect(screen.getByText(hint)).toBeInTheDocument();
  } catch (error) {
    expect(1).toBe(1);
  }
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(screen.getByText(hint)).toBeInTheDocument();
});

test('renders correct input type based on prop', () => {
  const { container } = render(
    <EdiText type="number" value={VALUE} onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(container.querySelector('input[type="number"]')).toBeInTheDocument();
});

test('renders texarea corretly', () => {
  const { container } = render(
    <EdiText type="textarea" value={VALUE} onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(container.querySelector('textarea')).toBeInTheDocument();
});

test('using cancelOnUnfocus and submitOnUnfocus together warns the user', () => {
  const warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  render(
    <EdiText
      value={VALUE}
      submitOnUnfocus={true}
      cancelOnUnfocus={true}
      onSave={() => false}
    />
  );
  expect(warn).toHaveBeenCalledWith(cancelOnConflictMessage);
});

test('default validation handling is working', async () => {
  const v = jest.fn((v: string) => v.length > 10);
  const { container } = render(
    <EdiText validation={v} value={VALUE} onSave={(v) => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Hello' } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  await waitFor(() => {
    expect(input).toBeInTheDocument();
    expect(screen.getByText('Invalid Value'));
  });
  expect(v).toHaveBeenCalledTimes(1);
});

test('custom validation handling is working', async () => {
  const v = jest.fn((v: string) => v.length > 10);
  const message = 'At least 10 character...';
  const { container } = render(
    <EdiText
      validation={v}
      value={VALUE}
      onSave={(v) => false}
      validationMessage={<span>{message}</span>}
    />
  );
  const button = container.querySelector('[editext="edit-button"]');
  if (!button) return;
  fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  await waitFor(() => fireEvent.change(input, { target: { value: 'Hello' } }));
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && userEvent.click(saveBtn);
  await waitFor(() => {
    expect(input).toBeInTheDocument();
    expect(screen.getByText(message));
    expect(v).toHaveBeenCalledTimes(1);
  });
});

test('onValidationFail is working', async () => {
  const v = jest.fn((v: string) => v.length > 10);
  const f = jest
    .fn((v: string) => console.log(`validation failed for ${v}`))
    .mockImplementation(() => {});
  const { container } = render(
    <EdiText
      validation={v}
      value={VALUE}
      onSave={(v) => false}
      onValidationFail={f}
    />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Hello' } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  await waitFor(() => {
    expect(input).toBeInTheDocument();
  });

  expect(v).toHaveBeenCalledTimes(1);
  expect(f).toHaveBeenCalledTimes(1);
});

test('unfocusing saves the form', async () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} submitOnUnfocus onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  await waitFor(() =>
    fireEvent.change(input, { target: { value: afterValue } })
  );
  await waitFor(() => userEvent.click(document.body));
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('unfocusing cancels the form', async () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} cancelOnUnfocus onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  await waitFor(() => userEvent.click(document.body));
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('pressing enter activates the edit mode', () => {
  const { container } = render(
    <EdiText value={VALUE} startEditingOnEnter onSave={() => false} />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  viewContainer && fireEvent.focusIn(viewContainer);
  viewContainer &&
    fireEvent.keyDown(viewContainer, { key: 'Enter', code: 'Enter' });
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('focusing activates the edit mode', () => {
  const { container } = render(
    <EdiText value={VALUE} startEditingOnFocus onSave={() => false} />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  viewContainer && fireEvent.focusIn(viewContainer);
  viewContainer && fireEvent.focus(viewContainer);
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('controlled editing mode is working', () => {
  render(<Controlled />);
  const button = screen.getByText('toggle');
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
});

test('custom class names and button contents are working', () => {
  const cancelButtonContent = 'cancel';
  const saveButtonContent = 'save';
  const editButtonContent = 'edit';
  const buttonsAlign = 'after';
  const saveButtonClassName = 'save-btn';
  const cancelButtonClassName = 'cancel-btn';
  const editButtonClassName = 'edit-btn';
  const viewContainerClassName = 'container-view';
  const editContainerClassName = 'edit-view';
  const mainContainerClassName = 'main-view';
  const { container } = render(
    <EdiText
      cancelButtonContent={cancelButtonContent}
      saveButtonContent={saveButtonContent}
      editButtonContent={editButtonContent}
      buttonsAlign={buttonsAlign}
      saveButtonClassName={saveButtonClassName}
      cancelButtonClassName={cancelButtonClassName}
      editButtonClassName={editButtonClassName}
      viewContainerClassName={viewContainerClassName}
      editContainerClassName={editContainerClassName}
      containerProps={{ className: mainContainerClassName }}
      value={VALUE}
      onSave={() => false}
    />
  );
  expect(
    container.querySelector(`button.${editButtonClassName}`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`div.${viewContainerClassName}`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`div.${mainContainerClassName}`)
  ).toBeInTheDocument();

  const button = container.querySelector('[editext="edit-button"]');
  expect(button?.textContent).toBe(editButtonContent);
  button && fireEvent.click(button, new MouseEvent('click'));

  expect(
    container.querySelector(`div.${editContainerClassName}`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`button.${saveButtonClassName}`)
  ).toBeInTheDocument();
  expect(
    container.querySelector(`button.${cancelButtonClassName}`)
  ).toBeInTheDocument();
});

test('custom viewProps are working', async () => {
  const kd = jest.fn(() => false);
  const of = jest.fn(() => false);
  const ob = jest.fn(() => false);
  const { container } = render(
    <EdiText
      value={VALUE}
      onSave={() => false}
      viewProps={{ onKeyDown: kd, onFocus: of, onBlur: ob }}
    />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  if (viewContainer) {
    await waitFor(() => {
      fireEvent.focusIn(viewContainer);
      fireEvent.keyDown(viewContainer, { key: 'Enter', code: 'Enter' });
      fireEvent.focusOut(viewContainer);
    });
    expect(kd).toHaveBeenCalled();
    expect(of).toHaveBeenCalled();
    expect(ob).toHaveBeenCalled();
  }
});
test('custom buttonsContainerProps are working', async () => {
  const kd = jest.fn(() => false);
  const of = jest.fn(() => false);
  const ob = jest.fn(() => false);
  const { container } = render(
    <EdiText
      value={VALUE}
      onSave={() => false}
      buttonsContainerProps={{
        onKeyDown: kd,
        onFocus: of,
        onBlur: ob,
        className: 'buttons-container',
      }}
    />
  );
  const buttonsContainer = container.querySelector(
    '[editext="button-container"]'
  );
  if (buttonsContainer) {
    await waitFor(() => {
      fireEvent.focusIn(buttonsContainer);
      fireEvent.keyDown(buttonsContainer, { key: 'Enter', code: 'Enter' });
      fireEvent.focusOut(buttonsContainer);
    });
    expect(buttonsContainer).toHaveClass('buttons-container');
    expect(kd).toHaveBeenCalled();
    expect(of).toHaveBeenCalled();
    expect(ob).toHaveBeenCalled();
  }
});

test('custom inputProps are working', async () => {
  const kd = jest.fn(() => false);
  const of = jest.fn(() => false);
  const ob = jest.fn(() => false);
  const { container } = render(
    <EdiText
      value={VALUE}
      onSave={() => false}
      inputProps={{ onKeyDown: kd, onFocus: of, onBlur: ob }}
    />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input?.value).toBe(VALUE);
  if (input) {
    await waitFor(() => {
      fireEvent.focusIn(input);
      fireEvent.keyDown(input, { key: 'Enter', code: 'enter' });
      fireEvent.focusOut(input);
    });
    expect(kd).toHaveBeenCalled();
    expect(of).toHaveBeenCalled();
    expect(ob).toHaveBeenCalled();
  }
});

test('make sure undefined value is ignored', () => {
  const { container } = render(
    <EdiText
      // @ts-ignore
      value={undefined}
      onSave={() => false}
    />
  );
  expect(container.querySelector('div[editext="view"]')?.textContent).toBe('');
});

test('onCancel prop is working', () => {
  const oc = jest.fn((v) => v);
  const { container } = render(
    <EdiText value={VALUE} onSave={() => false} onCancel={oc} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input?.value).toBe(VALUE);
  const cnclButton = container.querySelector('[editext="cancel-button"]');
  cnclButton && fireEvent.click(cnclButton, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
  expect(oc).toHaveBeenCalledTimes(1);
});

test('onEditingStart prop is working', () => {
  const oc = jest.fn((v) => v);
  const { container } = render(
    <EdiText value={VALUE} onSave={() => false} onEditingStart={oc} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input?.value).toBe(VALUE);
  expect(oc).toHaveBeenCalledTimes(1);
});

test('custom containerProps are working', async () => {
  const kd = jest.fn(() => false);
  const of = jest.fn(() => false);
  const ob = jest.fn(() => false);
  const { container } = render(
    <EdiText
      value={VALUE}
      onSave={() => false}
      containerProps={{
        onKeyDown: kd,
        onFocus: of,
        onBlur: ob,
        style: { marginTop: 20 },
      }}
    />
  );
  const mainContainer = container.querySelector('[editext="main-container"]');
  if (mainContainer) {
    fireEvent.focusIn(mainContainer);
    fireEvent.keyDown(mainContainer, { key: 'Enter', code: 'Enter' });
    fireEvent.focusOut(mainContainer);

    expect(kd).toHaveBeenCalledTimes(1);
    expect(of).toHaveBeenCalledTimes(1);
    expect(ob).toHaveBeenCalledTimes(1);
  }
});

test('canEdit prop is called before enabled the editin', () => {
  let comp = render(
    <EdiText value={VALUE} onSave={() => false} canEdit={() => false} />
  );
  let button = comp.container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  let input = comp.container.querySelector('input');
  expect(input).not.toBeInTheDocument();

  comp = render(
    <EdiText value={VALUE} onSave={() => false} canEdit={() => true} />
  );
  button = comp.container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  input = comp.container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input?.value).toBe(VALUE);

  comp = render(<EdiText value={VALUE} onSave={() => false} canEdit={true} />);
  button = comp.container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  input = comp.container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input?.value).toBe(VALUE);
});
