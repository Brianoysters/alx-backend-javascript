/**
 * Traverses a set checking for array
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author <https://github.com/Brianoysters>
 * @returns {Boolean}
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
