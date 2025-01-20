function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];  // Инициализация массива оценок
  }
  
  Student.prototype.setSubject = function (subjectName) {
    if (!this.excluded) {  // Если студент не отчислен, можно устанавливать предмет
      this.subject = subjectName;
    }
  }
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (this.excluded) {  // Если студент отчислен, не добавляем оценки
      return;
    }
    if (this.marks) {  // Проверяем, что у студента есть массив marks
      this.marks.push(...marksToAdd);  // Добавляем все оценки из rest-параметра
    }
  }
  
  Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {  // Если оценок нет
      return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);  // Суммируем все оценки
    return sum / this.marks.length;  // Возвращаем среднее
  }
  
  Student.prototype.exclude = function (reason) {
    this.excluded = reason;  // Устанавливаем причину отчисления
    delete this.subject;  // Удаляем предмет
    delete this.marks;  // Удаляем оценки
  }
  
  module.exports = {
    Student
  };
  