import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 300px;
  .avatar {
    border-radius: 50%;
    height: 100px;
    margin: 30px 0;
    width: 100px;
  }
  .description {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
  }
  .tag,
  .location {
    color: gray;
  }
  .stats {
    display: flex;
    list-style: none;
    margin: 0;
    margin-top: 25px;
    padding: 0;
    width: 100%;
    li {
      background-color: #e8e8e8;
      border: 1px solid #bbbaba;
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      gap: 5px;
      padding: 10px 0;
      text-align: center;
      &:first-child {
        border-bottom-left-radius: 5px;
      }
      &:last-child {
        border-bottom-right-radius: 5px;
      }
    }
  }
  .label {
    color: gray;
  }
  .quantity {
    font-weight: 700;
  }
  p {
    margin: 0;
  }
`;
