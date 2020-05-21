/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) return string;

  let result = '';
  let count = 0;

  if (size === 0) {
    return result;
  } else {
    string.split('').reduce(function (prev, current) {
      if (current !== prev) {
        count = 1;
        result += current;
      } else {
        if (count < size) {
          count += 1;
          result += current;
        }
      }

      return current;
    }, '')
  }
  return result;
}
