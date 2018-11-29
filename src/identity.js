export default function identity([first, ...rest], ...exprs) {
  return rest.reduce((previousValue, currentValue, currentIndex) => {
    return `${previousValue}${exprs[currentIndex]}${currentValue}`;
  }, first);
}
