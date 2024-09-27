interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Max',
  lastName: 'Xam',
  fullTimeEmployee: false,
  location: 'Reims',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Baptiste',
  lastName: 'Etsitpab',
  location: 'Bordeaux',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassConstructor {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework(): string {
      return "Currently working";
  }

  displayName(): string {
      return this.firstName;
  }
}

const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());
console.log(student.workOnHomework());
