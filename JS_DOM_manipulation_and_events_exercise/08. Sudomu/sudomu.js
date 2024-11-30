document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    const formEl = document.querySelector('#solutionCheck');
    const outputEl = document.querySelector('#check');

    let status = '';
    let size = 3;

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const rows = e.target.querySelectorAll('table tbody tr');

        rows.forEach(row => {
            const values = [...row.children].map(el => el.children[0].value);
            // console.log(values);
            const duplicates = values.filter((item, index) => values.indexOf(item) !== index);

            if ( duplicates.length > 0 ) {
                status += '0';
            } else {
                status += '1';
            }
        });

        status += 'x';

        for ( let i = 1; i <= size; i++) {
            const column = [...e.target.querySelectorAll(`table tbody tr td:nth-child(${i})`)].map(el => el.children[0].value);
            const duplicates = column.filter((item, index) => column.indexOf(item) !== index);

            if ( duplicates.length > 0 ) {
                status += '0';
            } else {
                status += '1';
            }
        }

        if ( ! status.includes('0')) {
            outputEl.classList.remove('fail');
            outputEl.classList.add('sucess');
            outputEl.textContent = 'Success!';
        } else {
            outputEl.classList.add('fail');
            outputEl.classList.remove('sucess');            
            outputEl.textContent = 'Keep trying ...';
        }
    });

    // const inputs = document.querySelectorAll('table input');

    // inputs[0].value = 1;
    // inputs[1].value = 2;
    // inputs[2].value = 3;
    // inputs[3].value = 3;
    // inputs[4].value = 1;
    // inputs[5].value = 2;
    // inputs[6].value = 2;
    // inputs[7].value = 3;
    // inputs[8].value = 1;
}