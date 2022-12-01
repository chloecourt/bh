"use client";
import FormInput from "../../components/blocks/FormInput";
import { FormEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({});
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("in login handle submit");
  };
  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <div className="flex flex-col">
          <label>message</label>
          <textarea name="contact-us-message" />
        </div>
        <button className="w-3 bg-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
