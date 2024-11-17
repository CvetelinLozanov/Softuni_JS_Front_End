function extract(elementId) {
    const text = document.querySelector('#' + elementId).textContent.trim();
    const pattern = /\(([^()]+))/g;

    return [...text.matchAll(pattern)].map(el => el[1]).join('; ');
}