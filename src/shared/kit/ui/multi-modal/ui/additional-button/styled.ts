import styled from 'styled-components';

const Button = styled.button`
  outline: 0;
  border: 0;
  width: 48px;
  min-width: 48px;
  height: 48px;

  background-color: inherit;

  padding: 16px 8px 12px 8px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f3f7;

  transition: all 0.3s;

  cursor: pointer;

  color: #626c77;
  font-size: 17px;

  &:hover {
    background-color: #e1e5eb;
  }

  &:focus {
    background-color: #f2f3f7;
    outline: 1px solid #007cff;
  }
`;

export const Styled = {
  Button,
};
