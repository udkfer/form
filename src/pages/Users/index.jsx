import { getUsers } from "../../../api/dataApi";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

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
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <UserCard user={user} />
            </div>
            ))}
        </div>
    )
}

export default UsersData