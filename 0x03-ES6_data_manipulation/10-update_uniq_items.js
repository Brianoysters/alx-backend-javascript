/**
 * Varies the quantity of unique grocery items to 100
 * @author <https://github.com/Brianoysters>
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
