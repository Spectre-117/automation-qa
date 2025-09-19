const averageGrade = 86;

if (averageGrade < 60 && averageGrade >= 0) {
    console.log(`Незадовільно`);
} else if (averageGrade <= 70 && averageGrade >= 60) {
    console.log(`Задовільно`);
} else if (averageGrade <= 80 && averageGrade > 70) {
    console.log(`Добре`);
} else if (averageGrade <= 90 && averageGrade > 80) {
    console.log(`Дуже добре`);
} else if (averageGrade <= 100 && averageGrade > 90) {
    console.log(`Відмінно`);
} else {
    console.log(`Оцінки немає або вона помилкова`);
}