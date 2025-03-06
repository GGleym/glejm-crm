import styled, {css} from 'styled-components';

const Wrapper = styled.div<{$completed: boolean}>`
  background: white;
  border: 1px solid #e2e5eb;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 8px;

  ${({$completed}) => $completed && css``}

  &:hover {
    box-shadow:
      0px 9px 10px 0px #00000014,
      0px 0px 8px 0px #00000014;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #007cff;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  margin: 8px 0 12px 0;
  display: inline-block;
`;

const Attributes = styled.div`
  display: flex;
  gap: 16px;
`;

const Attribute = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #f2f3f7;
  border-radius: 24px;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Wrapper,
  Link,
  Attributes,
  Attribute,
  Icon,
};
