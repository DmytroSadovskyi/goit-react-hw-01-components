import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  background-color: gainsboro;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 40px;
  padding-left: 40px;
  &:nth-of-type(1) {
    background-color: tomato;
  }
  &:nth-of-type(2) {
    background-color: yellow;
  }
  &:nth-of-type(3) {
    background-color: green;
  }
  &:nth-of-type(4) {
    background-color: violet;
  }
  &:nth-of-type(5) {
    background-color: bisque;
  }
`;
