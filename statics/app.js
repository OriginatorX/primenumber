function handleInput() {
    const inputfield = document.getElementById('inputfield');
    
    const pretendNumber = Number(inputfield.value);
    if (Number.isNaN(pretendNumber) || pretendNumber === 0) {
        console.log('The entered data is not a number');
        return;
    }

    isPrime(pretendNumber) 
        ? formatOutput(pretendNumber, 'prime')
        : formatOutput(pretendNumber, 'composite');
}

function formatOutput(number, kind) {
    const outputfield = document.getElementById('output');
    const outputNumber = document.getElementById('outputNumber');

    outputNumber.textContent = String(number);
    outputfield.textContent = `is a ${kind} number`;
}

function isPrime(pretendNumber) {
    for (let i = 2; Math.pow(i, 2) <= pretendNumber; i++) {
        if (pretendNumber % i == 0) {
            return false;
        } 
    }
    return pretendNumber === 1 ? false : true;
}
