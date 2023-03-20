import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  margin-bottom: 20px;
  border-collapse: collapse;
  table-layout: fixed;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Thead = styled.thead`
  background-color: blueviolet;
  color: #fff;

  tr {
    th:not(:last-child) {
      border-right: 1px solid white;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: gainsboro;
  }
`;

export const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
