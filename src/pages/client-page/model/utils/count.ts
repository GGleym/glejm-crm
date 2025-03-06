import {UnknownObject} from '~/types/common';
import {CurrencyAmount} from '../types';

export const countFundsSum = (...funds: CurrencyAmount[][]) =>
  funds.reduce(
    (_, currFunds) =>
      currFunds.reduce((prevAmount, data) => {
        const {currency, amount} = data || {};

        if (currency === 'RUR') {
          return prevAmount + amount;
        }

        // TODO: дописать конвертер в рубли из других валют
        return 0;
      }, 0),
    0,
  );

export const countProductsQuantity = (...products: UnknownObject[][]) =>
  products.reduce((prevQuantity, currentProduct) => prevQuantity + currentProduct.length, 0);
