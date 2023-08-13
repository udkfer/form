import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Button, TextField } from "@mui/material";

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
        <TextField value={name} onChange={(e) => setName(e.target.value)} type="name" onBlur={validateForm} label="Name" />
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" onBlur={validateForm} label="E-mail" />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" onBlur={validatePassword} error = {!validPassword} label="Password" />
      </div>
      <Button variant="contained" disabled={!validForm} >
      { validForm ? "alles gut" : "alles scheisse"  }
      </Button>
    </div>
  );
}

export default Form;
