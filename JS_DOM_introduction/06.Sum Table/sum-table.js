function sumTable() {
    const values = document.querySelectorAll('table tbody tr:not(:last-child) td:last-child');
    const sumElement = document.querySelector('#sum');

    sumElement.textContent = [...values]
        .map(el => Number(el.textContent))
        .reduce((sum, num) => sum + num, 0)
        .toFixed(2);
}