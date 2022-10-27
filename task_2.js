// проверка числа на принадлежность простым числам до 1000
const checkIfPrime = (num) => {
    if (num <= 1 || num > 999) {
        console.log('Число должно быть больше 1 и меньше 1000!');
        return;
    }
    
    let outputText = "Данное число является простым";
    
    for (let i = 2, sq = Math.sqrt(num); i <= sq+1; i++) {
        if (num % i == 0 && num != 2) {
            outputText = "Данное число не является простым";
            break;
        }
    }

    console.log(outputText);                                                      
}