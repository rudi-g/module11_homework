// вывод количества четных/нечетныж чисел из массива при помощи функции 
function countEvenOddNumbers() {
    const array = [6, 2, -14, 'string', 35, 7, null, 0, 10];
    let even = 0,
        odd  = 0,
        zero = 0;

    array.forEach((item) => {
        if (typeof item == 'number' && Math.sign(item) != -1 && !isNaN(item)) {
            if (!item) {
                zero++; 
            } else if (item % 2) {
                odd++;
            } else {
                even++;
            }
        }
    })

    console.log(`Количество четных чисел = ${even}`);
    console.log(`Количество нечетных чисел = ${odd}`);
    console.log(`Количество нулей = ${zero}`);
}

countEvenOddNumbers();