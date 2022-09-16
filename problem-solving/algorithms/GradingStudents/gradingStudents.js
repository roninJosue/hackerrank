const gradingStudents = (grades) => {
    return grades.map(grade => {
        const nearestMultiplyOfFive = Math.ceil(grade / 5) * 5
        if (grade < 38) return grade
        return (nearestMultiplyOfFive - grade) < 3 ? nearestMultiplyOfFive : grade 
    })
}


console.log(gradingStudents([73, 67, 38, 33]))
