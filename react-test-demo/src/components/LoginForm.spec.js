import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//
import LoginFrom from "./LoginForm";

beforeEach(()=>{
  
})
afterEach(()=>{

})

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
  const wrong_email = "aaa.com";

  const submitButtonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  // getByText will throw if the element does't exist
  let  emailErrorElement = screen.queryByText(errorMsg);
  expect(emailErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, wrong_email);
  userEvent.click(submitButtonElement);

  emailErrorElement = screen.queryByText(errorMsg);
  expect(emailErrorElement).toBeInTheDocument();
});


test("Should show password error message if password is less than 5 charcters", () => {
  render(<LoginFrom />);
  const errorMsg = /The password you entered should contain 5 or more characters./i;
  const correct_email = "aaa@bbb.com";
  const pwd = '123';

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText(/^password/i);
  

  // getByText will throw if the element does't exist
  let  passwordErrorElement = screen.queryByText(errorMsg);
  expect(passwordErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, correct_email);
  userEvent.type(passwordInputElement, pwd);

  const submitButtonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.click(submitButtonElement);

  passwordErrorElement = screen.queryByText(errorMsg);
  expect(passwordErrorElement).toBeInTheDocument();
});



test("Should show confirm password error message if passwords don't match", () => {
  render(<LoginFrom />);
  const errorMsg = /The passwords don't match. Try again./i;
  const correct_email = "aaa@bbb.com";
  const correct_pwd = '123456';

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText(/^password/i);
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);

  // getByText will throw if the element does't exist
  let  confirmPasswordErrorElement = screen.queryByText(errorMsg);
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, correct_email);
  userEvent.type(passwordInputElement, correct_pwd);
  userEvent.type(confirmPasswordInputElement, 'abc');

  const submitButtonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.click(submitButtonElement);

  confirmPasswordErrorElement = screen.queryByText(errorMsg);
  expect(confirmPasswordErrorElement).toBeInTheDocument();
});



test("Should show no error message if every input is valid", () => {
  render(<LoginFrom />);
  const errorMsg = /The passwords don't match. Try again./i;
  const correct_email = "aaa@bbb.com";
  const correct_pwd = '123456';

  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText(/^password/i);
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);

  // getByText will throw if the element does't exist
  let  confirmPasswordErrorElement = screen.queryByText(errorMsg);
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, correct_email);
  userEvent.type(passwordInputElement, correct_pwd);
  userEvent.type(confirmPasswordInputElement, correct_pwd);

  const submitButtonElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.click(submitButtonElement);

  confirmPasswordErrorElement = screen.queryByText(errorMsg);
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();
});
