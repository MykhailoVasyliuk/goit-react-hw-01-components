import { FriendContainer } from 'components/FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export const Friend = ({ id, isOnline, name, avatar }) => {
  return (
    <FriendContainer className="item" key={id}>
      <span className={`status ${isOnline ? 'online' : 'ofline'}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendContainer>
  );
};

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
