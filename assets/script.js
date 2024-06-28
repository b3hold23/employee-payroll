// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employee = [];

// Collect employee data
const collectEmployees = function () {
  let moreEmp = true;

  while(moreEmp) {
    const firstName = prompt('First name', 'John')
    const lastName = prompt('Last name', 'Smith')
    const salary = parseFloat(prompt('Employee Salary', '30,000'));
    
    const emp = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    //console.log("Emp object: ", emp);
  
    employee.push(emp);
    //console.log("Employee Array: ", employee);
    
    moreEmp = confirm("Add another employee?")
  }

  return employee;
 
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let total = 0;

  for(var i=0; i<employeesArray.length;i++){
    total = total + employeesArray[i].salary;
  }

  const avg = total / employeesArray.length;

  console.log("The Average Salary is: ", avg);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  console.log(index);

  console.log(`Congratulations to , ${employeesArray[index].firstName} ${employeesArray[index].lastName}} our random drawing winner!`)

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);