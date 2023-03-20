import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  padding: 10px 20px 10px 15px;

  background-color: gainsboro;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
