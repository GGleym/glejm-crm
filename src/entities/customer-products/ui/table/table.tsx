import {type ComponentProps} from 'react';

import {Dropdown, Flex, granatLightTheme, Icon, MoneyText, Spacer, Text} from '@mtsdengi/uikit-fintech';

import {Table as KitTable} from '~/kit/ui/table';
import {RUB} from '~/consts/currency';

import {Styled} from './styled';

type TableProps = {
  /** Колонки */
  columns: ComponentProps<typeof KitTable>['columns'];
  /** Данные колонок */
  data: ComponentProps<typeof KitTable>['data'];
  /** Признак наличия айки рядом с суммой */
  hasAssetsSumIcon: boolean;
  /** Итоговая сумма активов/пассивов */
  assetsSum: number;
  /** Заголовок для итоговой суммы активов/пассивов */
  assetsTitle: string;
  /** Список фильтров */
  filters?: {id: string}[];
  /** Хендлер клика на строчку таблицы */
  onRowClick?: (item: Record<string, unknown>) => void;
  /** Признак наличия колонки с чекбоксами */
  hasCheckboxesColumn?: boolean;
};

export const Table = ({
  columns,
  data,
  hasAssetsSumIcon,
  // hasCheckboxesColumn,
  assetsSum,
  assetsTitle,
  onRowClick,
}: TableProps) => {
  // const selectionColumn: TableColumn<T> = {
  //   id: 'selection',
  //   renderHeading: () => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={allSelected}
  //         useIndeterminate={someSelected}
  //         onChange={handleSelectAll}
  //         aria-label="Select all"
  //       />
  //     </div>
  //   ),
  //   renderCell: (_, row) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={selectedRows.includes(row.id as string)}
  //         onCheckedChange={(checked) => handleSelectRow(row.id as string, checked as boolean)}
  //         aria-label="Select row"
  //       />
  //     </div>
  //   ),
  // };

  // const preparedColumns = [hasCheckboxesColumn  ? ,  ...columns]

  return (
    <Styled.Wrapper>
      <Flex justifyContent="space-between" alignItems="center">
        <Dropdown inputProps={{placeholder: `Все (${data.length})`}} />
        <div>
          <Text color={granatLightTheme.colors.text.secondary} font="p4RegularText">
            {assetsTitle}:
          </Text>
          <Flex gap={granatLightTheme.spacings.s4} alignItems="center" justifyContent="flex-end">
            <MoneyText font="p3MediumComp" currency={RUB}>
              {assetsSum}
            </MoneyText>
            {hasAssetsSumIcon && (
              <Icon
                iconPath="granat/info-circle/size-16-style-outline"
                color={granatLightTheme.colors.text.primaryLink}
              />
            )}
          </Flex>
        </div>
      </Flex>
      <Spacer space="s16" />
      <KitTable
        onRowClick={onRowClick}
        columns={columns}
        data={data}
        background={granatLightTheme.colors.background.secondary}
        hasBorder={false}
      />
    </Styled.Wrapper>
  );
};
