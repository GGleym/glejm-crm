import {MultiModal} from '~/kit/ui/multi-modal';

import {ProfileInfo} from '../profile-info';

import {Styled} from './styled';

export const Header = () => (
  <Styled.Wrapper>
    <MultiModal />
    <ProfileInfo />
  </Styled.Wrapper>
);
