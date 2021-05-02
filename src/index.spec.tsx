import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EdiText from '.';

test('renders without error', () => {
  render(<EdiText value="Hello World" onSave={() => false} />);
  expect(screen.getByText('Hello World')).toBeTruthy();
});
