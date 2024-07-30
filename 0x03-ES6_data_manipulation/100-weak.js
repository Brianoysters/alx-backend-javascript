/**
 * Monitors number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author <https://github.com/Brianoysters>
 */

// 100-weak.js

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
