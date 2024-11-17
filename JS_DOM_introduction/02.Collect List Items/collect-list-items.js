function extractText() {
    const listElements = document.querySelectorAll('ul li');
    const textAreaElement = document.querySelector('#result');

    textAreaElement.value = [...listElements].map(el => el.textContent.trim()).join('\n');
}