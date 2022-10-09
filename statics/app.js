function handleInput() {
    const inputfield = document.getElementById('inputfield');
    
    const pretendNumber = Number(inputfield.value);
    if (Number.isNaN(pretendNumber) || pretendNumber <= 0) {
        formatOutput(pretendNumber, 'an invalid')
        return;
    }

    isPrime(pretendNumber) 
        ? formatOutput(pretendNumber, 'a prime')
        : formatOutput(pretendNumber, 'a composite');
}

function formatOutput(number, kind) {
    const outputfield = document.getElementById('output');
    const outputNumber = document.getElementById('outputNumber');

    outputNumber.textContent = String(number);
    outputfield.textContent = `is ${kind} number`;
}

function isPrime(pretendNumber) {
    for (let i = 2; Math.pow(i, 2) <= pretendNumber; i++) {
        if (pretendNumber % i == 0) {
            return false;
        }
        console.log('item'); 
    }
    return pretendNumber === 1 ? false : true;
}
