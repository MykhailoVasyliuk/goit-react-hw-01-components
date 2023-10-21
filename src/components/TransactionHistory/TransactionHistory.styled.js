import styled from 'styled-components';

export const Container = styled.table`
  border-collapse: collapse;
  margin: 20px auto;
  width: 50%;
  thead,
  tbody {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  thead {
    background-color: #2ca5a5;
    th {
      border: 1px solid white;
      color: white;
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid #b0a8a8;
        text-transform: capitalize;
      }
      &:nth-child(2n + 1) {
        background-color: #bad8d8;
      }
    }
  }
  tr {
    display: flex;
    width: 100%;
  }
  th,
  td {
    flex: 1 0 0;
    padding: 15px 20px;
    text-align: center;
  }
`;
