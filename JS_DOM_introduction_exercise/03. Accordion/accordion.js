function toggle() {
    const button = document.querySelector('#accordion .button');
    const content = document.querySelector('#extra');

    if ( content.style.display === 'block' ) {
        content.style.display = 'none';
        button.textContent = 'More';
    } else {
        content.style.display = 'block';
        button.textContent = 'Less';
    }
}