import styled, {keyframes, css} from 'styled-components';

const scale = keyframes`
  0% {
    transform-origin: top left;
    transform: translate(0, 0);
    clip-path: inset(0 0 0 0 round 12px 12px 0px 0px);
  }
  100% {
    transform-origin: top left;
    transform: translate(0, 0);
    clip-path: inset(2px 2px 0px 2px round 12px 12px 0px 0px);
  }
`;

const Button = styled.button<{$enabled: boolean}>`
  outline: 0;
  border: 0;
  background-color: #e1f3fe;
  padding: 16px 16px 12px 16px;

  border-radius: 12px 12px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #cfe5f6 !important;

    & svg path {
      fill: #007cff;
    }
  }

  &:active {
    background-color: #cfe5f6;

    animation: ${scale} 0.3s linear;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    animation-fill-mode: forwards;
  }

  &:focus {
    outline: 1px solid #007cff;
  }

  ${({$enabled}) =>
    $enabled &&
    css`
      background-color: #007cff !important;
      color: #fafafa;
    `}
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

export const Styled = {
  Button,
  Icon,
};
