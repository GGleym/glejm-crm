import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  flex: 1 1 auto;
  max-width: 100%;
`;

const TabBar = styled.div`
  width: calc(100% - 57px);
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  width: 100%;
`;

export const Styled = {
  Container,
  TabBar,
  TabWrapper,
};
