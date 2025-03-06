import {Spacer} from '@mtsbank/ui-kit';
import {Badge, granatLightTheme, Text} from '@mtsdengi/uikit-fintech';

import {CellInfo} from '~/ui/cell-info';
import {Flex} from '~/ui/flex';
import {Section} from '~/ui/Section';

export const CorpClientCard = () => {
  return (
    <Section palette="gray">
      <Flex container justifyContent="space-between">
        <Flex>
          <Text font="p3MediumText" as="p">
            «АТОМНЫЙ ЛЕС»
          </Text>
          <Text font="p4MediumUppText" as="p">
            «АТОМНЫЙ ЛЕС»
          </Text>
        </Flex>
        <Flex>
          <Flex container columnSpacing={0.75}>
            <Flex col>
              <Badge
                backgroundColor={granatLightTheme.colors.accent.positive}
                textColor={granatLightTheme.colors.background.primary}
              >
                Действующий
              </Badge>
            </Flex>
            <Flex col>
              <Badge
                backgroundColor={granatLightTheme.colors.text.tertiary}
                textColor={granatLightTheme.colors.background.primary}
              >
                VIP
              </Badge>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Spacer space={granatLightTheme.spacings.s16} />

      <Flex container columns={7} columnSpacing={1.5}>
        <Flex col xs={1}>
          <CellInfo label="ИНН">-</CellInfo>
        </Flex>
        <Flex col xs={1}>
          <CellInfo label="ОГРН">-</CellInfo>
        </Flex>
        <Flex col xs={1}>
          <CellInfo label="КПП">-</CellInfo>
        </Flex>
        <Flex col xs={1}>
          <CellInfo label="Сегмент">-</CellInfo>
        </Flex>
        <Flex col xs={3}>
          <CellInfo label="Клиентский менеджер">-</CellInfo>
        </Flex>
      </Flex>
    </Section>
  );
};
