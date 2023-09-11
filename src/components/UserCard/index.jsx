import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css'; // Import your CSS stylesheet

function UserCard({ user }) {
  const { name, email, picture } = user;

  return (
    <div className="user-card-container"> {/* Add a container */}
      <div className="user-card"> {/* Apply styles to the card */}
        <img src={picture.large} alt={name.first} className="user-card__avatar" />
        <h2 className="user-card__name">{`${name.first} ${name.last}`}</h2>
        <p className="user-card__email">{email}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    email: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserCard;

