import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {BaseLayout} from '../shared/ui/base-layout';

import {Desktop} from '~/pages/desktop';
import {NotFound} from '~/pages/not-found';
import {SSOPage} from '~/pages/sso';

import {withAuthorized} from '~/utils/withAuthorized';

const MainRouteElement = withAuthorized({Authorized: BaseLayout, UnAuthorized: SSOPage});

export const RoutesView = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainRouteElement />}>
        <Route path="/" element={<Desktop />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
