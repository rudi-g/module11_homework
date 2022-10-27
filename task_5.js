// возведение натурального числа в степень 
const numToPower = (num, power) => {
    if (typeof num != 'number' || typeof power != 'number'
        || isNaN(num*power)
        || Math.sign(num) <= 0 
        || Math.sign(power) == -1 
    ) {
        return false;
    }

    let result = 1;

    while (power > 0) {
        result *= num;
        power--;
    }

    console.log(result);
}

numToPower(5, 0);