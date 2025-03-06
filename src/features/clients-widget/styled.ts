import styled from 'styled-components';

const Heading = styled.h4`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
`;

const Counter = styled.span`
  background-color: #ff0032;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 100px;
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

const Header = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  gap: 8px;

  margin-bottom: 8px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Styled = {
  Heading,
  Counter,
  Header,
  List,
};
