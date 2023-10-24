import PropTypes from 'prop-types';
import { Friend } from 'components/FriendListItem/FriendListItem';
import { FriendsContainer } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer className="friend-list">
      {friends.map(({ id, isOnline, name, avatar }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
