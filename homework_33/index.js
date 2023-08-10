'use strict'

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

//Task 1
//1
const listOfSubjects = Object.keys(subjects).join(',');
console.log(`List of subjects: ${listOfSubjects}`);

//Task 2
let generalAmountOfStudents = 0;
for (let key in subjects) {
    generalAmountOfStudents += subjects[key].students;
}
console.log(`Genersn amount of Students: ${generalAmountOfStudents}`);

let generalAmountOfTeachers = 0;
for (let key in subjects) {
    generalAmountOfTeachers += subjects[key].teachers;
}
console.log(`General amount of Students: ${generalAmountOfTeachers}`);

//Task 3
const numberOfSubjects = Object.keys(subjects).length;
const averageAmoutOfStudents = generalAmountOfStudents / numberOfSubjects;
console.log(averageAmoutOfStudents);

//Task 4
const arrayOfSubjects = Object.keys(subjects);
console.log(arrayOfSubjects);

//Task 5
const arrayOfKeys = Object.values(subjects);

arrayOfKeys.sort((a, b) => {
    return b.teachers - a.teachers;
})
console.log(arrayOfKeys);
