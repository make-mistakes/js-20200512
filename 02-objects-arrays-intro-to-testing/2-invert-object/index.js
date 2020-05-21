/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if(obj === undefined) return undefined;
  return Object.keys(obj).reduce(function(acc, key) {
    (acc[obj[key]] = key);
    return acc;
  }, {})
}
