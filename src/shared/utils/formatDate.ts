export const formatDate = (date: unknown, splitSign: string = '-', joinSign: string = '.') => {
  if (typeof date !== 'string') {
    console.error('Date must be of type string');

    return '';
  }

  return date.split(splitSign).join(joinSign);
};
