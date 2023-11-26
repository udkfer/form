import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css'; // Import your CSS stylesheet
import { useHistory } from 'react-router-dom';
function UserCard({ user }) {
  const { name, email, photo } = user;
  const history = useHistory();

  return (
    <div className="user-card-container" onClick={() => history.push(`/users/${user.id}`)}> {/* Add a container */}
      <div className="user-card"> {/* Apply styles to the card */}
        {photo && <img className="user-card__photo" src={photo} alt={name} />}
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__email">{email}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string,
  }).isRequired,
};

export default UserCard;

