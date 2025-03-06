import styled, {keyframes} from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
`;

const Marquee = styled.span<{$animationDuration: number}>`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  will-change: transform;

  animation: ${scroll} ${({$animationDuration}) => $animationDuration ?? 10}s linear infinite;
  -webkit-animation: ${scroll} ${({$animationDuration}) => $animationDuration ?? 10}s linear infinite;
`;

const Icon = styled.div`
  margin-right: 8px;

  display: flex;
  align-items: center;

  background: inherit;
  z-index: 10;
`;

export const Styled = {
  Marquee,
  Icon,
};
