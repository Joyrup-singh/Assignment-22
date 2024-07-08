function displayStudentInfo(student) {
    for (let key in student) {
      if (student.hasOwnProperty(key)) {
        console.log(`${key}: ${student[key]}`);
      }
    }
  }
  
  // Example usage
  const student = {
    Name: "Alice",
    age: 20,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
  };
  
  displayStudentInfo(student);