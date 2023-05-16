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
    // console.log(departmentList, "department");

    const Data = {
      numEmployees: element.employees.length,
      employees: element.employees,
      departments: departmentList,
    };
    filterdata.push(Data);
  });

  console.log(filterdata, "filterdataa");
};

// processCompanies(companies);

// Solution 2

const projects = [
  {
    name: "Project 1",
    client: "BMC Solutions",
    tasks: [
      {
        title: "Task 1",
        assigness: "John",
        status: "Not Start",
        dueDate: "2023-05-01",
      },
      {
        title: "Task 2",
        assigness: "Amrut",
        status: "Completed",
        dueDate: "2023-05-06",
      },
      {
        title: "Task 3",
        assigness: "Parvej",
        status: "Completed",
        dueDate: "2023-05-05",
      },
    ],
  },
  {
    name: "Project 2",
    client: "ATXE Solutions",
    tasks: [
      {
        title: "Task 1",
        assigness: "John",
        status: "In Progress",
        dueDate: "2023-05-01",
      },
      {
        title: "Task 2",
        assigness: "Amrut",
        status: "Completed",
        dueDate: "2023-05-10",
      },
    ],
  },
];
// findOverdueTasks(projects, "2023-05-01");

function findOverdueTasks(arr, date) {
  let filteOverDueTask = [];

  for (let item of arr) {
    let tasks = item.tasks;
    console.log(tasks.dueDate > date);
    // console.log(tasks, "tasks");

    let data = tasks.filter((el) => el.dueDate > date);
    // console.log(data);
    let tasksData = {
      name: item.name,
      client: item.client,
      tasks: JSON.stringify(data),
    };

    filteOverDueTask.push(tasksData);
  }

  // console.log(filteOverDueTask, "filteOverDueTask");

  // console.log(filteOverDueTask, "filteOverDueTask");
}

// ? Problem Second
assignTaskToEmployee(projects, "Project 1", "Task 1", "Alice");

function assignTaskToEmployee(arr, project, task, user) {
  let assignedTask;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].name === project) {
  //     // console.log(arr[i])
  //     let tasks = arr[i].tasks;

  //     for (let j = 0; i < tasks.length; i++) {
  //       // console.log(tasks[j])

  //       if (tasks[j].title === task) {
  //         tasks[j].assigness = user;
  //         // console.log(tasks[j], "task j")
  //         // console.log(arr[i] , "item i")
  //         assignedTask = tasks[j]
  //         break;
  //       }
  //     }
  //   }
  // }

  // console.log(assignedTask, "assigned task");
  //*  other approch

  const tasks = arr.find((el) => el.name === project).tasks;

  const taskData = tasks.find((el) => el.title === task);

  taskData.assigness = user;

  console.log("Task", taskData);
}

updateTaskStatus(projects, "Project 1", "Task 1", "In Progress");

function updateTaskStatus(arr, project, task, status) {
  let assignedTask;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === project) {
      // console.log(arr[i])
      let tasks = arr[i].tasks;

      for (let j = 0; i < tasks.length; i++) {
        // console.log(tasks[j])

        if (tasks[j].title === task) {
          tasks[j].status = status;
          // console.log(tasks[j], "task j")
          // console.log(arr[i] , "item i")
          assignedTask = tasks[j];
          break;
        }
      }
    }
  }

  // console.log(assignedTask, "Task status Update");

  //? other approch
  const tasks = arr.find((el) => el.name === project).tasks;

  const taskData = tasks.find((el) => el.title === task);

  taskData.assigness = status;

  console.log("Task", taskData);
}
