"use client";
import FormInput from "../../components/sub-components/FormInput";
import { useState, useRef } from "react";
const Login = () => {
  //useRef
  // sign in
  const signInEmail = useRef(null);
  const signInPassword = useRef(null);
  //useRef
  // create account
  const createAccountFirstName = useRef(null);
  const createAccountLastName = useRef(null);
  const createAccountEmail = useRef(null);
  const createAccountPassword = useRef(null);
  const createAccountConfirmPassword = useRef(null);

  const [login, setLogin] = useState({});
  const handleSignIn = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log("handle sign in was clicked");
    /*
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
     */
  };
  const handleCreateAccount = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("in login handle submit");
  };
  return (
    <div className="flex flex-row gap-9 justify-center overflow-hidden ">
      <div className="flex flex-col items-center">
        <h2>Sign In</h2>
        <form data-testid="sign-in-form" onSubmit={handleSignIn}>
          <FormInput
            label="Email"
            inputAttributes={{
              required: true,
              type: "email",
              placeholder: "Email",
              ref: signInEmail,
              autocomplete: "username",
            }}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ref: signInPassword,
              required: true,
              type: "password",
              placeholder: "Password",
              autocomplete: "current-password",
            }}
          />
          <button className="bg-white rounded-lg px-5 m-5" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <h2>Create an Account</h2>
        <form
          data-testid="create-acount-form"
          onSubmit={(e) => handleCreateAccount(e)}
        >
          <FormInput
            label="First Name"
            inputAttributes={{
              ref: createAccountFirstName,
              required: true,
              type: "text",
              placeholder: "First Name",
            }}
          />
          <FormInput
            label="Last Name"
            inputAttributes={{
              ref: createAccountLastName,
              required: true,
              type: "text",
              placeholder: "Last Name",
            }}
          />
          <FormInput
            label="Email"
            inputAttributes={{
              ref: createAccountEmail,
              required: true,
              type: "email",
              placeholder: "Email",
              autocomplete: "username",
            }}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ref: createAccountPassword,
              required: true,
              type: "password",
              placeholder: "Password",
              autocomplete: "new-password",
            }}
          />
          <FormInput
            label="Password"
            inputAttributes={{
              ref: createAccountConfirmPassword,
              required: true,
              type: "password",
              placeholder: "Password",
              autocomplete: "new-password",
            }}
          />
          <button type="submit" className="bg-white rounded-lg px-5 m-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
