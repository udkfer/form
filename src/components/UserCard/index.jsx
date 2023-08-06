/* eslint-disable react/prop-types */
function UserCard ({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name.first}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard