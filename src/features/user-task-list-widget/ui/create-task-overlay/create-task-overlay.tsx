import {type ComponentProps} from 'react';

import {useUnit} from 'effector-react';
import {useForm} from 'effector-forms';

import {Badge, Button, granatLightTheme, InlineEdit, Text} from '@mtsdengi/uikit-fintech';
import {Spacer} from '@mtsbank/ui-kit';

import {Overlay} from '~/kit/ui/overlay';

import {events, stores} from '../../model';

import {$taskOverlayForm} from './model';
import {Field, Section, Styled} from './ui';

export const CreateTaskOverlay = ({isOpen, onClose}: ComponentProps<typeof Overlay>) => {
  const [board, onCardAdded] = useUnit([stores.$board, events.cardCreateClicked]);
  const {fields, values} = useForm($taskOverlayForm);

  return (
    <Overlay
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button
          onClick={() => {
            onClose();
            onCardAdded({card: {...values, attributes: []}, columnId: board[0].id});
          }}
        >
          Создать задачу
        </Button>
      }
    >
      <InlineEdit
        autoFocus
        onBlur={() => {
          if (!fields.title.value) {
            fields.title.onChange('Новая задача');
          }
        }}
        withIcon={false}
        size={24}
        placeholder="Новая задача"
        onChange={fields.title.onChange}
        value={fields.title.value}
      />
      <Spacer space={granatLightTheme.spacings.s32} />
      <Section
        title="Параметры"
        fields={[
          <Field label="Клиент" value={fields.clientName.value} onChange={fields.clientName.onChange} />,
          <Field label="Исполнитель" value={fields.executor.value} onChange={fields.executor.onChange} />,
          <Styled.Wrapper>
            <Text color={granatLightTheme.colors.text.secondary}>Приоритет</Text>
            <Badge backgroundColor={granatLightTheme.colors.control.activeTabbar}>Средний</Badge>
          </Styled.Wrapper>,
        ]}
      />
      <Spacer space={granatLightTheme.spacings.s32} />
      <Section
        title="Сроки исполнения"
        fields={[
          <Field label="Дедлайн" value={fields.deadline.value} onChange={fields.deadline.onChange} />,
          <Field
            label="Время выполнения"
            value={fields.executionTime.value.from}
            onChange={(value) => fields.executionTime.onChange({...fields.executionTime.value, from: value})}
          />,
          // <Field
          //   value={fields.executionTime.value.to}
          //   onChange={(value) => fields.executionTime.onChange({...fields.executionTime.value, to: value})}
          // />,
          <Field label="Локация" value={fields.location.value} onChange={fields.location.onChange} />,
        ]}
      />
      <Spacer space={granatLightTheme.spacings.s32} />
      <Section
        title="Описание задачи"
        fields={[
          <Field
            value={fields.taskDescription.value}
            onChange={fields.taskDescription.onChange}
            placeholder="Введите описание"
          />,
        ]}
      />
    </Overlay>
  );
};
