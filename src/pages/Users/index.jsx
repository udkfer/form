import { getUsers } from "../../../api/dataApi";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
import styles from "./index.module.css"

function UsersData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div className={ styles.user_card }>
      {users.map((user) => (
        <div key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  )
}

export default UsersData
