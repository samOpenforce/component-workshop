//used by number format directive
export const parseFormattedInputString = (value: string): number => {
  const simpleString = value
    .split(/\D/)
    .reduce((previousValue, currentValue, currentIndex, array) => {
      if (array.length - 1 == currentIndex) {
        return previousValue + '.' + currentValue;
      } else {
        return previousValue + currentValue;
      }
    });
  return parseFloat(simpleString);
};
