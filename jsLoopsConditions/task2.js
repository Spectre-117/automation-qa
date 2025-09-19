const averageGrade = 86;

switch (true) {
    case averageGrade < 60 && averageGrade >= 0:
        console.log(`Незадовільно`);
        break;
    case averageGrade <= 70 && averageGrade >= 60:
        console.log(`Задовільно`);
        break;
    case averageGrade <= 80 && averageGrade > 70:
        console.log(`Добре`);
        break;
    case averageGrade <= 90 && averageGrade > 80:
        console.log(`Дуже добре`);
        break;
    case averageGrade <= 100 && averageGrade > 90:
        console.log(`Відмінно`);
        break;
    default:
        console.log(`Оцінки немає або вона помилкова`);
}