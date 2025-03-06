import React, {createElement, Suspense, useLayoutEffect} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';

import {MultiModal} from './multi-modal';
import {MultiModalProvider} from './lib/hooks/useMultiModal/multi-modal-provider';
import {useMultiModal} from './lib/hooks/useMultiModal/useMultiModal';
import {SnapshotView} from './lib/types';
import {granatLightTheme, Icon, StyleProvider} from '@mtsdengi/uikit-fintech';
import {FinderOutput} from '../../../../features/multi-search/ui/finder-output';
import {ThemeProvider} from 'styled-components';

const meta = {
  title: 'Navigation/MultiModal',
  component: MultiModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StyleProvider>
        <ThemeProvider theme={granatLightTheme}>
          <MultiModalProvider>
            <Story />
          </MultiModalProvider>
        </ThemeProvider>
      </StyleProvider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof MultiModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const SNAPSHOTS: SnapshotView[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    iconType: 'biTools',
  },
  {
    id: 2,
    text: 'Title2',
    iconType: 'message',
  },
  {
    id: 3,
    text: 'Title3',
    iconType: 'biTools',
  },
  {
    id: 4,
    text: 'Title4',
    iconType: 'biTools',
  },
  {
    id: 5,
    text: 'Title5',
    iconType: 'biTools',
  },
  {
    id: 6,
    text: 'Title6',
    iconType: 'biTools',
  },
  {
    id: 7,
    text: 'Title7',
    iconType: 'biTools',
  },
  {
    id: 8,
    icon: <Icon iconPath="granat/search/size-24-style-outline" />,
  },
  // {
  //   text: 'Title',
  //   icon: icon,
  //   hasNotification: false,
  // },
];

const ScreenRenderer = () => {
  const {screenState} = useMultiModal();

  if (screenState.currentState === 'fallback' || !screenState.currentViewID) {
    return <div>Loading fallback...</div>;
  }

  const View = screenState.views.find((v) => v.id === screenState.currentViewID);

  if (!View) {
    return <div>Error: View not found</div>;
  }

  return (
    <Suspense fallback={<View.loader />}>
      <View.component />
    </Suspense>
  );
};

const Loader = () => <div>Загрузка...</div>;

const ErrorFallback = () => <div>Произошла ошибка</div>;

const SNAPSHOT_VIEWS = {
  1: {
    component: () => <div>Это первый компонент</div>,
    loader: Loader,
    errorFallback: ErrorFallback,
  },
  2: {
    component: () => <div>Это второй компонент</div>,
    loader: Loader,
    errorFallback: ErrorFallback,
  },
  3: {
    component: () => <div>Это третий компонент</div>,
    loader: Loader,
    errorFallback: ErrorFallback,
  },
  8: {
    component: () => <FinderOutput />,
    loader: Loader,
    errorFallback: ErrorFallback,
  },
};

export const Primary: Story = {
  render: (args) =>
    createElement(() => {
      const {openView, setScreenState} = useMultiModal();

      const handleSnapshotChange = (snapshot: number) => {
        const {component, loader, errorFallback} = SNAPSHOT_VIEWS[snapshot as keyof typeof SNAPSHOT_VIEWS];

        openView({
          id: snapshot,
          component,
          loader,
          errorFallback,
        });
        setScreenState('done');
      };

      useLayoutEffect(() => {
        handleSnapshotChange(SNAPSHOTS[0].id);
      }, []);

      return (
        <>
          <MultiModal {...args} onSelectSnapshot={handleSnapshotChange} />
          <ScreenRenderer />
        </>
      );
    }),
  args: {
    snapshots: SNAPSHOTS,
    onSelectSnapshot: () => {},
  },
};
