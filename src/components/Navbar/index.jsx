import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

function Navbar() {
    const history = useHistory();

    function handleClick() {
        history.push("/users");
    }

    return (
        <div className={ styles.navbar}>
            <button onClick={handleClick}>Users</button>
            <button onClick={() => history.push("/form")}>Form</button>
            <button onClick={() => history.push("/home")}>Home</button>
        </div>
    )
}

export default Navbar

