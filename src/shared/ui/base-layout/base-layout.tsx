import {Outlet} from 'react-router-dom';

import {MultiModalProvider} from '~/kit/ui/multi-modal';

import {Sidebar} from './ui/sidebar';
import {Content} from './ui/content';

import {Styled} from './styled';

export const BaseLayout = () => (
  <MultiModalProvider>
    <Styled.Layout>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Styled.Layout>
  </MultiModalProvider>
);
