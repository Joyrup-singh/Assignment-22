//Student List 

const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"},
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
    { id: 3, firstName: "Bob", lastName: "Jonshon", age: 19, grade: "A"},
    //Add more students
];

//List All Students 

function listAllStudents() {
    console.log('Student List:');
    students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }

  // Adding New Students

  function addStudents(id, firstName, lastName, age, grade){
    const newStudent = {id, firstName, lastName, age, grade};
    students.push(newStudent);
    console.log('Student Added Successfully.');
  }
  
//   Updating Students

function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
      console.log('Student updated successfully.');
    } else {
      console.log('Student not found.');
    }
  }

  // Deleting Students

  function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
      console.log('Student deleted successfully.');
    } else {
      console.log('Student not found.');
    }
  }

  // Find Student By Grade

  function findStudentsByGrade(grade){
    const studentsWithGrade = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`);
    studentsWithGrade.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
      });
  }

// Calculate Average Age

function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of students: ${averageAge.toFixed(2)}`);
  }


// List initial students
listAllStudents();

// Add a new student
addStudents(4, 'Alice', 'Brown', 21, 'B');
listAllStudents();

// Update a student's information
updateStudent(2, { age: 23, grade: 'A' });
listAllStudents();

// Delete a student
deleteStudent(3);
listAllStudents();

// Find students by grade
findStudentsByGrade('A');

// Calculate the average age of students
calculateAverageAge();