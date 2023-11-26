import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { getUser, updateUser, deleteUser } from "../../api/userService";
import styles from "./style.module.css";

function UserInfo() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const data = await getUser(id);
      setUser(data);
    }
    fetchData();
  }, [id]);

  if (!user)
    return (
      <div className={styles.loading}>
        <span>Loading...</span>
      </div>
    );

  return (
    <div className={styles.page}>
      <div className={styles.inputs}>
        <TextField
          label="Name"
          variant="outlined"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          fullWidth
        />
      </div>
      <div className={styles.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await updateUser(user.id, user);
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={async () => {
            await deleteUser(user.id);
            history.push("/users");
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
