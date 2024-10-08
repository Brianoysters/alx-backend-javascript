/**
 * Outputs grades for a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students
 * @author <https://github.com/Brianoysters>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
