class Student {
    constructor(name, lastName, averageScore) {
        this.name = name;
        this.lastName = lastName;
        this.averageScore = averageScore;
    }

    static getStudentsAverageScore(studentsList) {
        if (studentsList.length === 0) return 0;
        const averageMark = studentsList.reduce((acc, student)=> acc+student.averageScore ,0);
        return averageMark/studentsList.length;
    }
}