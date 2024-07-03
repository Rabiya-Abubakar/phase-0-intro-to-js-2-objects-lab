// Write your solution in this file!
const employee = {};

// Function to update an employee with a new key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update an employee with a new key and value (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key from an employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key from an employee (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};
