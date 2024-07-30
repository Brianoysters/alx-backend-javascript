/**
 * Finds students in a given location.
 * @param {String} city - The location.
 * @author <https://github.com/Brianoysters>
 * @returns
 */

export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
