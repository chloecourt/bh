"use client";
import React from "react";
import FormInput from "./sub-components/FormInput";
import { useRef } from "react";
const GetInTouch = () => {
  const contactFirstName = useRef(null);
  const contactLastName = useRef(null);
  const contactEmail = useRef(null);
  const contactMessage = useRef(null);

  return (
    <div>
      <h1>Get in Touch</h1>
      <form className="flex flex-col w-7/12">
        <FormInput
          label="First Name"
          inputAttributes={{
            type: "text",
            required: true,
            ref: contactFirstName,
            autoComplete: "email",
          }}
        />
        <FormInput
          label={"Last Name"}
          inputAttributes={{
            type: "text",
            required: true,
            ref: contactFirstName,
          }}
        />
        <FormInput
          label={"Email"}
          inputAttributes={{
            type: "email",
            required: true,
            ref: contactEmail,
            autoComplete: "username",
          }}
        />
        <label>Message</label>
        <textarea className="rounded" name="contact-message" rows={10} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetInTouch;
