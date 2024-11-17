function colorize() {
    const rows = document.querySelectorAll('table tr:nth-child(even)');
    [...rows].forEach((el, i) => el.style.background = 'teal');
}