import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EdiText from '.';
import { cancelOnConflictMessage } from './utils';

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

test('using cancelOnUnfocus and submitOnUnfocus together warns the user', () => {
  const warn = jest.spyOn(global.console, 'warn');
  render(
    <EdiText
      value={VALUE}
      submitOnUnfocus={true}
      cancelOnUnfocus={true}
      onSave={() => false}
    />
  );
  expect(warn).toBeCalledWith(cancelOnConflictMessage);
});
