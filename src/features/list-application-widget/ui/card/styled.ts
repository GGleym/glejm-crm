import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #e2e5eb;
  border-radius: 4px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  color: #18191c;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const LinkByTags = styled.div`
  display: flex;
  gap: 8px;
`;

const Link = styled.a`
  color: #007cff;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
`;

const Linear = styled.div`
  width: 141px;
  height: 8px;
  border-radius: 12px;
  background-color: #dce0e7;
`;

const Gradient = styled.div<{$size: number}>`
  width: ${({$size}) => $size}px;
  height: 8px;
  border-radius: 12px;
  background-color: #26cd58;
`;

const Scoring = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 6px 0;
  box-sizing: border-box;
`;

const HelperText = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: #626c77;
`;

export const Styled = {
  Wrapper,
  PersonalData,
  ProductName,
  LinkByTags,
  Link,
  Linear,
  Gradient,
  Scoring,
  HelperText,
};
