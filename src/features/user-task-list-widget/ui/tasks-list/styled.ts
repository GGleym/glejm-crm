import styled from 'styled-components';

const StatusBadge = styled.div<{status: string}>`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({status}) => {
      switch (status) {
        case 'overdue':
          return '#F95721';
        case 'pending':
          return '#FAC031';
        case 'inProgress':
          return '#007CFF';
        case 'completed':
          return '#26CD58';
        default:
          return '#6B7280';
      }
    }};
  }
`;

export const Styled = {
  StatusBadge,
};
