import { Friend } from 'components/FriendListItem/FriendListItem';
import { FriendsContainer } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer className="friend-list">
      {friends.map(({ id, isOnline, name, avatar }) => (
        <Friend
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </FriendsContainer>
  );
};
