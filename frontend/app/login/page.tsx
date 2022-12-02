"use client";
import FormInput from "../../components/blocks/FormInput";
import { FormEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({});
  const handleCreateAccount = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("in login handle submit");
  };
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col">
        <h2>Sign In</h2>
        <form>
          <FormInput
            label="email"
            inputAttributes={{
              onChange: () => console.log("login"),
              required: true,
              type: "email",
            }}
          />
          <FormInput
            label="password"
            inputAttributes={{
              onChange: () => console.log("login"),
              required: true,
              type: "password",
            }}
          />
          <button className="bg-white rounded-lg px-5 m-5" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <h2>Create an Account</h2>
        <form onSubmit={(e) => handleCreateAccount(e)}>
          <FormInput
            label="first name"
            inputAttributes={{
              onChange: () => console.log("login"),
              required: true,
              type: "text",
            }}
          />
          <FormInput
            label="last name"
            inputAttributes={{
              onChange: () => console.log("login"),
              required: true,
              type: "text",
            }}
          />
          <FormInput
            label="email"
            inputAttributes={{
              onChange: () => console.log("login"),
              required: true,
              type: "email",
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
