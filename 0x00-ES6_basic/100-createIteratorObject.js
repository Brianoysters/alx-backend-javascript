export default function createIteratorObject(report) {
	const employees = report.allEmployees;
	
	function* employeeGenerator() {
		for (const department of Object.values(employees)) {
			for (const employee of department) {
				yield employee;
			}
		}
	}
	
	return employeeGenerator();
}

