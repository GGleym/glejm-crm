import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  border-top-left-radius: 16px;
  background-color: white;

  box-sizing: border-box;
  padding: 32px 32px 64px;

  overflow: auto;

  height: calc(100% - 68px);
`;

const ContentLayout = styled.div`
  position: relative;
  width: calc(100% - 80px);
  height: 100%;
  left: 80px;
  top: 0;
`;

export const Styled = {
  Container,
  ContentWrapper,
  ContentLayout,
};
