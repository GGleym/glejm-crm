import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #e2e5eb;
  border-radius: 8px;
  padding: 16px;

  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.span`
  padding: 4px;
  border-radius: 8px;
  background-color: #f2f3f7;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #007cff;
  text-decoration: none;
`;

export const Styled = {
  Wrapper,
  Contact,
  Icon,
  Link,
};
