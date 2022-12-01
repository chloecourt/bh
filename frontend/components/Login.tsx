import FormInput from "./blocks/FormInput";

const Login = () => {
  return (
    <div>
      <h2>Create an Account</h2>
      <form>
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
        <label>message</label>
        <textarea></textarea>
      </form>
    </div>
  );
};
export default Login;
