/**
 * HackerLand University has the following grading policy:
 * Every student receives a grade in the inclusive range from 0 to 100.
 * Any grade less than 40 is a failing grade.
 * Sam is a professor at the university and likes to round each student's  according to these rules:
 * If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
 * If the value of  is less than , no rounding occurs as the result will still be a failing grade. 
 */

const gradingStudents = (grades) => {
    return grades.map(grade => {
        const nearestMultiplyOfFive = Math.ceil(grade / 5) * 5
        if (grade < 38) return grade
        return (nearestMultiplyOfFive - grade) < 3 ? nearestMultiplyOfFive : grade 
    })
}


console.log(gradingStudents([73, 67, 38, 33]))
