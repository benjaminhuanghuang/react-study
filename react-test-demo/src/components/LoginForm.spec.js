import { render, screen } from '@testing-library/react';
import LoginFrom from './LoginForm';

test('Inputs should be initially empty', () => {
  render(<LoginFrom />);

  const emailInputElement = screen.getByRole('textbox');
  expect(emailInputElement.value).toBe("");


  const passwordInputElement = screen.getByLabelText(/^password/i);
  expect(passwordInputElement.value).toBe("");

  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  expect(passwordInputElement.value).toBe("");
});
