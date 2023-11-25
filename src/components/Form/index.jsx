import { useState, useEffect } from "react";
import { Modal, Grid, Typography, Button, TextField } from "@mui/material";
import "./style.css";
import { useFormStore } from "../../store/formStore";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const { openModal, toggleModal } = useFormStore();

  function validatePassword() {
    if (password.length > 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
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
    <Modal open={openModal} onClose={toggleModal}>
      <div className="modal-container" style={{ width: "fit-content" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={validateForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              error={!validPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={toggleModal} // Close modal when "Create Account" is clicked
                style={{ width: "48%" }}
              >
                Create Account
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={!validForm}
                style={{ width: "48%" }}
              >
                {validForm ? "Login" : "Fields incomplete"}
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}

export default Form;


