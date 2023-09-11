import { useHistory } from 'react-router-dom'; import styles from './style.module.css';
import { Chip, Tooltip } from '@mui/material';
import Form from '../Form';
import { useState } from 'react'

function Navbar() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <div className={ styles.navbar }>
      <Tooltip title="Form home">
        <div className={ styles.title } onClick={() => history.push("/users")}>Form</div>
      </Tooltip>
      <Chip className={ styles.signin } label="Sign in" variant="outlined" onClick={() => setOpen(true)}>Sign in</Chip>
      <Form open={open} onClose={() => setOpen(false)}/>
    </div>
  )
}

export default Navbar

