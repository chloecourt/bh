import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <h1>Get in Touch</h1>
      <form className="flex flex-col w-7/12">
        <label>first name</label>
        <input type="input" />
        <label>last name</label>
        <input type="input" />
        <label>email</label>
        <input type="input" />
        <label>message</label>
        <textarea></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default GetInTouch;
