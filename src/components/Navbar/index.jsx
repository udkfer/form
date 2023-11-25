import { useHistory } from 'react-router-dom';
import styles from './style.module.css';
import { Chip, Tooltip } from '@mui/material';
import { useFormStore } from '../../store/formStore';

function Navbar() {
  const history = useHistory();
  const { toggleModal } = useFormStore();

  return (
    <div className={ styles.navbar }>
      <Tooltip title="Form home">
        <div className={ styles.title } onClick={() => history.push("/users")}>Form</div>
      </Tooltip>
      <Chip className={ styles.signin } label="Sign in" variant="outlined" onClick={toggleModal}>Sign in</Chip>
    </div>
  )
}

export default Navbar
