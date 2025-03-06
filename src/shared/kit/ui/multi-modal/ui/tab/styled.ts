import styled, {keyframes, css} from 'styled-components';
import {CloseButton} from '../close-button';
import {MAX_TAB_WIDTH, MIN_TAB_WIDTH} from '../../lib/constants';

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

const MarqueeContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: 168px;
  user-select: none;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    height: 100%;
    top: 0;
    width: 10%;
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  }
`;

const Wrapper = styled.div<{isActive: boolean; isSearchTab: boolean}>`
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
  background-color: #f2f3f7;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: ${({isSearchTab}) => (isSearchTab ? '12px 16px 11px 16px' : '16px 16px 12px 16px')};
  display: flex;
  align-items: center;

  &:hover {
    background: #e1e5eb;
  }

  &:hover ${MarqueeContainer} > span {
    animation-play-state: paused;
  }

  &:focus {
    outline: 1px solid #007cff;
  }

  &:active {
    animation: ${scale} 0.1s linear;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    animation-fill-mode: forwards;
  }

  ${({isActive}) =>
    isActive &&
    css`
      background-color: #ffffff;
      color: #1d2023;
    `}
`;

const DividedContainer = styled.div<{isActive: boolean; isSearchTab: boolean}>`
  width: 100%;
  max-width: ${MAX_TAB_WIDTH}px;
  min-width: ${MIN_TAB_WIDTH}px;
  transition: flex-basis 0.2s ease-in-out;

  position: relative;

  &::before {
    position: absolute;
    left: -3px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 1px;
    height: 36px;
    background: #ccc;
  }

  ${({isActive}) =>
    isActive &&
    css`
      flex-basis: ${MAX_TAB_WIDTH}px;

      &::before,
      & + div::before {
        background: transparent;
      }
    `}

  &:first-child::before {
    background: transparent;
  }

  &:hover::before,
  &:hover + div::before {
    background: transparent;
  }
`;

const IconWrapper = styled.div<{showDot?: boolean}>`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 6px;
    height: 6px;
    background-color: red;
    border-radius: 50%;
    display: ${(props) => (props.showDot ? 'block' : 'none')};
  }
`;

const Description = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
`;

const Close = styled(CloseButton)`
  margin-left: 8px;
`;

const Icon = styled.div<{$hasText: boolean}>`
  ${({$hasText}) =>
    $hasText &&
    `
    margin-right: 8px;
  `}

  display: flex;
  align-items: center;

  background: inherit;
  z-index: 10;
`;

export const Styled = {
  Close,
  Icon,
  Wrapper,
  DividedContainer,
  Text,
  IconWrapper,
  MarqueeContainer,
  Description,
};
