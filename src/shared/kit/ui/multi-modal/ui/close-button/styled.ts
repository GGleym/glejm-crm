import styled from 'styled-components';

const Button = styled.div`
  outline: 0;
  border: 0;
  width: 24px;
  min-width: 24px;
  height: 24px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.3s;

  pointer-events: all;

  border-radius: 8px;
  transform: scale(0.9166);

  margin: -6px;

  &:hover {
    background-color: #eef0f3;
  }

  &:focus {
    outline: 1px solid #007cff;
  }
`;

export const Styled = {
  Button,
};
