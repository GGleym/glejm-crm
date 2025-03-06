import {Text, Spacer, CellText} from '@mtsdengi/uikit-fintech';

import {Flex} from '~/ui/flex';

import {type PackageInfo} from '../../model/types';

import {Styled} from './styled';

export const HistoryCard = ({name, info}: PackageInfo) => (
  <Styled.Wrapper>
    <Text font="p4MediumComp">{name}</Text>

    <Spacer space="s16" />

    <Flex container columns={4}>
      {info.map(({id, label, caption}) => (
        <Flex col xs={1}>
          <CellText reverse key={id} label={label} caption={caption} />
        </Flex>
      ))}
    </Flex>
  </Styled.Wrapper>
);
