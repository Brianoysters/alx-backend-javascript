/**
 * Finds students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author <https://github.com/Brianoysters>
 * @returns
 */

export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
	  return [];
  }
  return students.filter((student) => student.location === city);
}
