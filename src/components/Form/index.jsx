import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  function validatePassword() {
    if (password.length > 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    validateForm();
  }

  function validateForm() {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  useEffect(() => {
    validateForm();
    validatePassword();
  }, [name, email, password]);

  return (
    <div>
      Hello, { name }
      <div>
        <TextField value={name} onChange={(e) => setName(e.target.value)} onBlur={validateForm} label="Name" />
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" onBlur={validateForm} label="E-mail" />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" onBlur={validatePassword} error = {!validPassword} label="Password" />
      </div>
      { validForm ? <p> alles gut </p> : <p> alles scheisse </p> }
    </div>
  );
}

export default Form;
