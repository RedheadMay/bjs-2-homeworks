function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {  // Проверяем, что у студента есть оценки (не отчислен)
        this.marks.push(...marksToAdd);  // Добавляем все оценки из rest-параметра
      }
}

Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {  // Если нет оценок
        return 0;
      }
      const sum = this.marks.reduce((acc, mark) => acc + mark, 0);  // Суммируем все оценки
      return sum / this.marks.length;  // Возвращаем среднее
}

Student.prototype.exclude = function (reason) {
    delete this.subject;  // Удаляем предмет
    delete this.marks;  // Удаляем оценки
    this.excluded = reason;  // Устанавливаем причину отчисления
}
 
  module.exports = {
    Student
  };
  