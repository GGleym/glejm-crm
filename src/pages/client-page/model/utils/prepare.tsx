import {CellText, currencySymbols} from '@mtsdengi/uikit-fintech';
import {formatMoney} from '@mtsbank/ui-kit';

import {Table} from '~/entities/customer-products/ui/table';

import type {Account, Card, Investment, Loan} from '../types';
import {ACCOUNTS_COLUMNS, CARDS_COLUMNS, INVEST_COLUMNS, LOANS_COLUMNS} from '../consts';

import {countFundsSum} from './count';
import {isAssetsSumIconShown} from './helper';
import {PrepareFuncArgument} from './types';
import {formatDate} from '~/utils/formatDate';

export const prepareAccountsData = (accounts: Account[]) =>
  accounts.map(({currency, balance, openDate, number, statusCode, type, name, rate}) => ({
    status: {CLOSE: 'Закрыт', TO_CLOSE: 'К закрытию', WORK: 'Действующий', FREEZED: 'Замороженный'}[statusCode],
    type: <CellText caption={type} label={name} />,
    rate,
    accountNumber: number,
    openDate: openDate,
    balance: formatMoney(balance, currency as keyof typeof currencySymbols),
  }));

export const prepareCardsData = (cards: Card[]) =>
  cards.map(({accountNumber, balance, openDate, pan, type, tariff, state}) => ({
    status: state,
    type: <CellText caption={tariff} label={type} />,
    cardNumber: pan,
    cardAccount: accountNumber,
    issueDate: openDate,
    rate: '-',
    balance,
  }));

export const prepareLoansData = (loans: Loan[]) =>
  loans.map(({state, name, number, rate, openDate, balance}) => ({
    status: state,
    name,
    rate,
    balance,
    openDate,
    accountNumber: number,
  }));

export const prepareInvestData = (investments: Investment[]) =>
  investments.map(({partnerDetail, partnerCode, currentBalance, calculateDate}) => ({
    status: 'Действующий',
    type: <CellText caption={partnerCode} label={partnerDetail} />,
    openDate: formatDate(calculateDate),
    period: formatDate(calculateDate),
    balance: currentBalance,
  }));

export const prepareBorrowedFunds = (loans: PrepareFuncArgument<Loan>) => [
  ...(loans.products.length
    ? [
        {
          title: 'НЦПК и POS-кредиты',
          render: () => (
            <Table
              hasAssetsSumIcon={false}
              columns={LOANS_COLUMNS}
              data={prepareLoansData(loans.products)}
              assetsSum={countFundsSum(loans.balances)}
              assetsTitle="Итого нецелевых и POS-кредитов"
            />
          ),
        },
      ]
    : []),
];

export const prepareOwnFunds = (
  cards: PrepareFuncArgument<Card>,
  accounts: PrepareFuncArgument<Account>,
  investments: PrepareFuncArgument<Investment>,
) => [
  ...(cards.products.length
    ? [
        {
          title: 'Карты',
          render: () => (
            <Table
              hasAssetsSumIcon={isAssetsSumIconShown(cards.balances)}
              columns={CARDS_COLUMNS}
              data={prepareCardsData(cards.products)}
              assetsSum={countFundsSum(cards.balances)}
              assetsTitle="Итого на картах"
            />
          ),
        },
      ]
    : []),
  ...(accounts.products.length
    ? [
        {
          title: 'Счета и депозиты',
          render: () => (
            <Table
              hasAssetsSumIcon={isAssetsSumIconShown(accounts.balances)}
              columns={ACCOUNTS_COLUMNS}
              data={prepareAccountsData(accounts.products)}
              assetsSum={countFundsSum(accounts.balances)}
              assetsTitle="Итого на счетах и депозитах"
            />
          ),
        },
      ]
    : []),
  ...(investments.products.length
    ? [
        {
          title: 'Инвестиционные продукты',
          render: () => (
            <Table
              hasAssetsSumIcon={isAssetsSumIconShown(investments.balances)}
              columns={INVEST_COLUMNS}
              data={prepareInvestData(investments.products)}
              assetsSum={countFundsSum(investments.balances)}
              assetsTitle="Итого на картах"
            />
          ),
        },
      ]
    : []),
];
