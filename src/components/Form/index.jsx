import { useState, useEffect } from "react";
import { Modal, Grid, Typography, Button, TextField } from "@mui/material";
import * as Tabs from "@radix-ui/react-tabs";
import { createUser } from "../../api/userService";
import { useFormStore } from "../../store/formStore";
import { useUserStore } from "../../store/userStore";
import styles from './style.module.css';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const { openModal, toggleModal } = useFormStore();
  const { login } = useUserStore();

  function validatePassword() {
    if (password.length > 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  function validateForm() {
    if (email.length > 0 && password.length > 0) {
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
      <div className={styles.modalContainer} style={{ width: "fit-content" }}>
        <Tabs.Root defaultValue="Login">
          <Tabs.List aria-label="Tabs" className={styles.tabs}>
            <Tabs.Trigger value="Register" className={styles.trigger}>Register</Tabs.Trigger>
            <Tabs.Trigger value="Login" className={styles.trigger}>Login</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="Register">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Register</Typography>
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={toggleModal}
                    style={{ width: "48%" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!validForm}
                    style={{ width: "48%" }}
                    onClick={async () => {
                      await createUser({name, email, password});
                      toggleModal();
                    }}
                  >
                    Register
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Tabs.Content>
          <Tabs.Content value="Login">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Login</Typography>
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={toggleModal}
                    style={{ width: "48%" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!validForm}
                    style={{ width: "48%" }}
                    onClick={async () => {
                      const response = await login({email, password});
                      if (response) {
                        toggleModal();
                      }
                    }}
                  >
                    Login
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </Modal>
  );
}

export default Form;
