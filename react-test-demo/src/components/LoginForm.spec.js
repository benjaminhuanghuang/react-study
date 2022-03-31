import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//
import LoginFrom from "./LoginForm";

test("Inputs should be initially empty", () => {
  render(<LoginFrom />);

  const emailInputElement = screen.getByRole("textbox");
  expect(emailInputElement.value).toBe("");

  const passwordInputElement = screen.getByLabelText(/^password/i);
  expect(passwordInputElement.value).toBe("");

  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  expect(confirmPasswordInputElement.value).toBe("");
});

test("Should be able to type an email", () => {
  render(<LoginFrom />);

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const email = "aaa@bbb.com";
  userEvent.type(emailInputElement, email);
  expect(emailInputElement.value).toBe(email);
});

test("Should be able to type a password", () => {
  render(<LoginFrom />);

  const passwordInputElement = screen.getByLabelText(/^password/i);
  const pwd = "password!";
  userEvent.type(passwordInputElement, pwd);
  expect(passwordInputElement.value).toBe(pwd);
});

test("Should be able to type a confirm password", () => {
  render(<LoginFrom />);

  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  const pwd = "password!";
  userEvent.type(confirmPasswordInputElement, pwd);
  expect(confirmPasswordInputElement.value).toBe(pwd);
});

test("Should show email error message on invalid email", () => {
  render(<LoginFrom />);

  const errorMsg = /The email you input is invalid./i;
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const email = "aaa.com";

  const submitButtonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  // getByText will throw if the element does't exist
  let  emailErrorElement = screen.queryByText(errorMsg);
  expect(emailErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, email);
  userEvent.click(submitButtonElement);

  emailErrorElement = screen.queryByText(errorMsg);
  expect(emailErrorElement).toBeInTheDocument();
});
