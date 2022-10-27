/* Вывод чисел с 5 до 15 каждую секунду */

// 1 способ
const numLooper = (min, max) => {
    if (min >= max || isNaN(min*max)) return;

    for (let i = min; i <= max; i++) {
        let intervalID = setInterval(printNum, i * 1000, i);

        setTimeout(() => {
            clearInterval(intervalID);
        }, i * 1000)
    }

    function printNum(num) {
        console.log(num);
    }
}

numLooper(5, 15);


// 2 способ
const numGenerator = (min, max) => {
    if (min >= max || isNaN(min * max)) return;

    const range = [...Array(max-min+1).keys()].map(x => x + min);

    const intervalID = setInterval(printNum, 1000);

    setTimeout(() => {
        clearInterval(intervalID);
    }, range.length * 1000);

    function printNum() {
        console.log(range.shift());
    }
}


// 3 способ
const numLooper2 = (min, max) => {
    if (min >= max || isNaN(min*max)) return false;

    for (let i = min; i <= max; i++) {
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    }
}

numLooper2(5, 15);