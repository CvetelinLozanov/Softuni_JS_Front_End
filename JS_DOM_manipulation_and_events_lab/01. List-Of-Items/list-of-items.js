function addItem() {
    const inputEl = document.querySelector('#newItemText');
    const listResult = document.querySelector('#items');

    if ( inputEl.value == '' ) return;

    const newListItem = document.createElement('li');

    newListItem.textContent = inputEl.value;

    listResult.appendChild(newListItem);
    inputEl.value = '';
}
