import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import { Chip, Tooltip } from "@mui/material";
import { useFormStore } from "../../store/formStore";
import { useUserStore } from "../../store/userStore";

function Navbar() {
  const history = useHistory();
  const { toggleModal, togglePostModal } = useFormStore();
  const { user } = useUserStore();

  return (
    <div className={styles.navbar}>
      <div className={styles.pages}>
        <Tooltip title="User list">
          <div className={styles.title} onClick={() => history.push("/users")}>
            Users
          </div>
        </Tooltip>
        <Tooltip title="Post list">
          <div className={styles.title} onClick={() => history.push("/posts")}>
            Posts
          </div>
        </Tooltip>
      </div>
      {!user.name ? (
        <Chip
          className={styles.signin}
          label="Login"
          variant="outlined"
          onClick={toggleModal}
        >
          Login
        </Chip>
      ) : (
        <Chip
          className={styles.signin}
          label="Make Post"
          variant="outlined"
          onClick={togglePostModal}
        >
          Make Post
        </Chip>
      )}
    </div>
  );
}

export default Navbar;
