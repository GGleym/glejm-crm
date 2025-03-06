import {useState} from 'react';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';

import {Avatar, ButtonIcon, Flex, granatLightTheme, Icon, Text} from '@mtsdengi/uikit-fintech';

import {useTimer} from '~/hooks/use-timer';

import {Styled} from './styled';

const formatDate = (date: Date) => {
  const time = format(date, 'HH:mm', {locale: ru});
  const day = format(date, 'dd', {locale: ru});

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const month = months[date.getMonth()];

  const year = format(date, 'yyyy', {locale: ru});

  return `${time} ${day} ${month} ${year}`;
};

export const ProfileInfo = () => {
  const [date, setDate] = useState<string>(formatDate(new Date()));

  useTimer(() => setDate(formatDate(new Date())));

  return (
    <Flex gap={granatLightTheme.spacings.s24} alignItems="center">
      <Styled.DateWrapper gap={granatLightTheme.spacings.s16} justifyItems="space-between" alignItems="center">
        <Text font="p4MediumComp">{date}</Text>
        <ButtonIcon variant="ghost" size={24}>
          <Icon iconPath="granat/calendar/size-24-style-fill" />
        </ButtonIcon>
      </Styled.DateWrapper>

      <ButtonIcon variant="ghost">
        <Icon iconPath="granat/notification/size-24-style-outline" />
      </ButtonIcon>

      <ButtonIcon variant="ghost">
        <Icon iconPath="granat/menu/size-24-style-outline" />
      </ButtonIcon>

      <Avatar size={44} lastName="Глейм" firstName="Иван" />
    </Flex>
  );
};
