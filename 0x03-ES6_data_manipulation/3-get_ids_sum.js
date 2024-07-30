/**
 * Outputs the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author <https://github.com/Brianoysters>
 * @returns {Number}
 */

export default function getStudentIdsSum(students) {
	return students.reduce((sum, student) => sum + student.id, 0);
}

