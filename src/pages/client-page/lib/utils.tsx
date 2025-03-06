import {Nullable} from '~/types/common';
import {OPTIONS} from '../model';

export const getAge = (date: string) => {
  const today = new Date();
  const birthDate = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age.toString();
};

export const capitalizeFullName = (fullName?: string) =>
  fullName
    ?.toLocaleLowerCase()
    .split(' ')
    .map((nameItem) => `${nameItem[0].toLocaleUpperCase()}${nameItem.slice(1)}`)
    .join(' ');

export const prepareOptions = (
  {
    products: productsLength,
    applications: applicationsLength,
  }: {products: Nullable<number>; applications: Nullable<number>},
  options: typeof OPTIONS,
) =>
  options.map((option) => {
    if (option.label === 'Продукты') {
      return {
        ...option,
        badge: productsLength,
      };
    } else if (option.label === 'Заявки') {
      return {
        ...option,
        badge: applicationsLength,
      };
    }

    return option;
  });
