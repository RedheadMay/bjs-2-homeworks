"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr[0] = (-b / (2 * a));
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки из годовой в месячную и из процентов в доли
  let monthlyRate = (percent / 100) / 12;

  // Расчет тела кредита
  let basic = amount - contribution;

  // Расчет ежемесячного платежа
  let monthlyPayment = basic * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

  // Расчет общей суммы платежа
  let totalAmount = monthlyPayment * countMonths;

  // Округление результата до двух знаков после запятой
  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}