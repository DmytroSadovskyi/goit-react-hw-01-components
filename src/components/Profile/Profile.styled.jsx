import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: gainsboro;

  margin-top: 20px;
  width: 250px;
  padding-top: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const Username = styled.p`
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: bisque;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 33%;
    &:not(:last-child) {
      border-right: 2px solid gainsboro;
    }
  }
`;

export const Label = styled.span`
  font-weight: bold;
`;
