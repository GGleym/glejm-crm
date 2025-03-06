import styled from 'styled-components';

import {Flex, Icon} from '@mtsdengi/uikit-fintech';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  top: 0;
  z-index: 100;
  height: 100%;
  width: 70%;
  overflow: auto;
  position: absolute;
  background: ${({theme}) => theme.colors.background.modal};
  padding: ${({theme}) => `${theme.spacings.s16}px ${theme.spacings.s32}px`};

  right: 0;
  border-top-left-radius: ${({theme}) => theme.spacings.s24}px;
  border-bottom-left-radius: ${({theme}) => theme.spacings.s24}px;
`;

const Close = styled(Icon)`
  cursor: pointer;
`;

const Footer = styled.div`
  padding: ${({theme}) => `${theme.spacings.s24}px ${theme.spacings.s32}px`};
  display: flex;
  justify-content: flex-end;
  gap: ${({theme}) => theme.spacings.s16}px;
  border-radius: ${({theme}) => theme.spacings.s24}px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);

  position: absolute;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.modal};
  left: 0;
  bottom: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

const FlexFluid = styled(Flex)`
  height: 100%;
  min-height: calc(100% - 24px);
`;

const OverflowContainer = styled.div`
  overflow: auto;
  height: calc(100% - 116px);
  margin-right: -${({theme}) => theme.spacings.s12}px;
  padding-right: ${({theme}) => theme.spacings.s20}px;
`;

export const Styled = {
  Container,
  Wrapper,
  Close,
  Footer,

  Content,
  FlexFluid,
  OverflowContainer,
};
