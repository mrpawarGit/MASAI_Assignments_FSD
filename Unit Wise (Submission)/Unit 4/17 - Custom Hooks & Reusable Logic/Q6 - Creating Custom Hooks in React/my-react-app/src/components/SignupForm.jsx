import useForm from "../hooks/useForm";

function SignupForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${values.name}\nEmail: ${values.email}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>

      <div>
        <label>Name:</label>
        <input name="name" value={values.name} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default SignupForm;
