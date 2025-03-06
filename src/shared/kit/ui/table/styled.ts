import styled from 'styled-components';

import {granatLightTheme} from '@mtsdengi/uikit-fintech';

const Table = styled.table<{$background?: string; $hasBorder?: boolean}>`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  min-width: 650px;
  border-radius: 16px;
  overflow: hidden;
  ${({$hasBorder = true}) =>
    $hasBorder &&
    ` 
    border: 1px solid ${granatLightTheme.colors.background.stroke};
  `}
  ${({$background}) => $background && `background: ${$background};`}
`;

const TableHead = styled.thead`
  background-color: ${granatLightTheme.colors.background.secondary};
`;

const Header = styled.th`
  padding: 12px;
  border-bottom: 1px solid ${granatLightTheme.colors.background.stroke};
  vertical-align: middle;
  text-align: left;
  line-height: 1;
  display: table-cell;

  &:first-child {
    border-top-left-radius: 16px;
  }

  &:last-child {
    border-top-right-radius: 16px;
  }
`;

const Row = styled.tr<{hasDivider?: boolean; hoverable?: boolean}>`
  display: table;
  table-layout: fixed;
  width: 100%;

  &:last-child {
    td:first-child {
      border-bottom-left-radius: 16px;
    }

    td:last-child {
      border-bottom-right-radius: 16px;
    }
  }

  ${({hoverable = true}) =>
    hoverable &&
    `
    &:hover {
      background: ${granatLightTheme.colors.background.hover};
    }
  `}
`;

const Cell = styled.td`
  margin: 0;
  padding: 12px;
  line-height: 1;
  display: table-cell;
  vertical-align: middle;
  border-bottom: 1px solid ${granatLightTheme.colors.background.stroke};

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  ${Row}:last-child & {
    border-bottom: none;
  }
`;

const Body = styled.tbody<{$bodyHeight: number}>`
  display: block;
  overflow-y: auto;

  ${({$bodyHeight}) =>
    $bodyHeight &&
    `
    max-height: ${$bodyHeight}px;
  `}
`;

const Head = styled.thead`
  width: calc(100% - 1em);
`;

export const Styled = {
  Header,
  TableHead,
  Row,
  Table,
  Cell,
  Head,
  Body,
};
