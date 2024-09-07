//Задание №1
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	};
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;


	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	};
	avg = sum / arr.length;


	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};

};

console.log(getArrayParams(1, 2, 3, -100, 10));


//Задание №2

//Насадка суммирования элементов
function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	};
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

console.log(summElementsWorker(10, 10, 11, 20, 10));

//насадка вычисления разницы максимального и минимального элементов;
function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let i;
	if (arr.length === 0) {
		return 0;
	};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		};
		if (arr[i] > max) {
			max = arr[i];
		};
	}

	return max - min;
};

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

//насадка вычисления разницы сумм чётных и нечётных элементов;
function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let i;
	if (arr.length === 0) {
		return 0;
	};

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		};
	};
	return sumEvenElement - sumOddElement;
};

console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

//насадка вычисления среднего значения чётных элементов.
function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;

	if (arr.length === 0) {
		return 0;
	};

	for (i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		};
	};

	return sumEvenElement / countEvenElement;
};

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5


//Задание №3
function makeWork(arrOfArr, func) {
  let maxWorkResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const num = arrOfArr[i];
    let workResult = func(...num);
    if (workResult > maxWorkResult){
      maxWorkResult = workResult;
    }
  }
  return maxWorkResult;
}
