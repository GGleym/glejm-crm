import {Styled} from './styled';

export type AdditionalButtonProps = {
  count: number;
};

export const AdditionalButton = ({count}: AdditionalButtonProps) => (
  <Styled.Button>
    +{count}
  </Styled.Button>
)
