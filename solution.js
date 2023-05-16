//* question 1

const companies = [
  {
    name: "Company 1",
    employees: [
      { name: "Alice", role: "Developer", department: "Engineering" },
      { name: "Bob", role: "Manager", department: "Engineering" },
      { name: "Charlie", role: "Designer", department: "Design" },
      { name: "Brij", role: "Designer", department: "Agri" },
    ],
  },
  {
    name: "Company 2",
    employees: [
      { name: "Parvej", role: "Developer", department: "Engineering" },
      { name: "Amrut", role: "Manager", department: "Account" },
      { name: "Krish", role: "Designer", department: "Design" },
    ],
  },
];

const processCompanies = (arr) => {
  let filterdata = [];
  arr.forEach((element) => {
    let departments = element.employees;
    let departmentList = {};
    departments.forEach((departmentID) => {
      let name = departmentID.department;
      departmentList[name] = (departmentList[name] || 0) + 1;
    });
    console.log(departmentList, "department");

    const Data = {
      numEmployees: element.employees.length,
      employees: element.employees,
      departments: departmentList,
    };
    filterdata.push(Data);

    l;
  });

  console.log(filterdata, "filterdataa");
};

processCompanies(companies);


// Solution 2 