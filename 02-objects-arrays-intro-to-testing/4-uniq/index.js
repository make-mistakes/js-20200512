/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  return (arr || []).reduce(function(acc, symbol) {
    if(acc.indexOf(symbol) === -1) acc.push(symbol);
    return acc;
  }, []);
}
