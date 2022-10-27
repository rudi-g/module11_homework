// вывод суммы двух чисел через функцию, 
// которая возвращает результат через другую функцию

function getSum(num1) {
    return function (num2) {
        let sum = num1 + num2;
        return sum;
    }
}

const resultFunc = getSum(7);
console.log(resultFunc(5));

// или
const resultFunc2 = getSum(7)(5);
console.log(resultFunc2);