import styled from 'styled-components';

export const Container = styled.section`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: white;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
  width: 500px;
  .title {
    color: black;
    margin: 0;
    margin-bottom: 20px;
  }
  .stat-list {
    display: flex;
    .item {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      gap: 5px;
      padding: 15px;
    }
  }
`;
