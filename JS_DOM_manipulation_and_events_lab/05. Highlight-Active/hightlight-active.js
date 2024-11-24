document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    function sectionFocusedEventHandler(e) {
        e.currentTarget.parentElement.classList.add('focused');
    }

    function sectionBluredEventHandler(e) {
        e.currentTarget.parentElement.classList.remove('focused');
    }

    const inputFields = document.querySelectorAll('input[type="text"]');

    [...inputFields].forEach(el => {
        el.addEventListener('focus', sectionFocusedEventHandler);
        el.addEventListener('blur', sectionBluredEventHandler);
    }) 
}