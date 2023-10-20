import styled from 'styled-components';

export const FriendContainer = styled.li`
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  font-weight: 700;
  gap: 10px;
  padding: 10px 15px;
  .status {
    display: block;
    border-radius: 50%;
    height: 15px;
    width: 15px;
  }
  .status.online {
    background-color: green;
  }
  .status.ofline {
    background-color: red;
  }
`;
