/**
 * code obtains ids from a list of students.
 * @author <https://github.com/Brianoysters>
 * @returns
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
