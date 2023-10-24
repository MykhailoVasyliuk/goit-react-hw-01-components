import { FriendContainer } from 'components/FriendListItem/FriendListItem.styled';

export const Friend = ({ isOnline, name, avatar }) => {
  return (
    <FriendContainer className="item">
      <span className={`status ${isOnline ? 'online' : 'ofline'}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendContainer>
  );
};
