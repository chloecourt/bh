import React from "react";

const SubscribeModal = () => {
  const handleSubmit = () => {
    // do something
  };

  return (
    <div>
      <h1>Stay up to Date</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="input" />
        <label>email</label>
        <input type="input" />
      </form>
    </div>
  );
};

export default SubscribeModal;
