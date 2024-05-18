function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, ingrese un valor válido.');
        return;
    }

    const discount1 = 1;
    const discount2 = 0.192;
    const result = inputValue - discount1 - discount2;

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(3)}`;

    addHistory(inputValue, discount1, discount2, result);
}

function addHistory(originalValue, discount1, discount2, finalResult) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.inner
