function loadMatches(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function createMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(match)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function updateMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl + match._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(match)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function deleteMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl + match._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}


function createElement(tag, properties, container) {
    const element = document.createElement(tag);

    Object.keys(properties).forEach(property => {
        if ( typeof properties[property] === 'object' ) {
            Object.assign( element.dataset, properties[property] );
        } else {
            element[property] = properties[property];
        }
    });

    if ( container ) container.append(element);

    return element;
}

function init() {
    const baseUrl = 'http://localhost:3030/jsonstore/matches/';
    
    const fields = [...document.querySelectorAll('#form form input[type="text"]')];

    const buttonAddMatchEl = document.querySelector('#add-match');
    const buttonEditMatchEl = document.querySelector('#edit-match');

    const listEl = document.querySelector('#list');

    buttonAddMatchEl.addEventListener('click', createHandler);
    buttonEditMatchEl.addEventListener('click', updateHandler);

    function loadEntries(){
        listEl.innerHTML = '';
        loadMatches(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
    }

    function createEntry({ host, score, guest, _id }){
        const entryEl = createElement('li', { className: 'match', dataset: { host, score, guest, _id } }, listEl);
        const infoEl = createElement('div', { className: 'info' }, entryEl);
        createElement('p', { textContent: host }, infoEl);
        createElement('p', { textContent: score }, infoEl);
        createElement('p', { textContent: guest }, infoEl);        
        const buttonsEl = createElement('div', { className: 'btn-wrapper' }, entryEl);
        createElement('button', { className: 'change-btn',textContent: 'Change', onclick: changeHandler }, buttonsEl);
        createElement('button', { className: 'delete-btn', textContent: 'Delete', onclick: deleteHandler }, buttonsEl);
    }

    function deleteEntry({host, score, guest, _id}) {
        listEl.querySelector(`li[data-_id="${_id}"]`).remove();
    }

    function createHandler(e) {
        e.preventDefault();

        const [ host, score, guest ] = fields.map(field => field.value);

        if ( ! host || ! score || ! guest ) return;

        const match = { host, score, guest };

        createMatch(baseUrl, match, (result) => {
            createEntry(result);
        });

        fields.forEach(field => field.value = '');
    }

    function changeHandler(e) {
        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        entryEl.classList.add('active');
    
        fields.forEach((field, index) => field.value = values[index])

        buttonAddMatchEl.disabled = true;
        buttonEditMatchEl.disabled = false;
    }

    function updateHandler(e) {
        e.preventDefault();

        const [ host, score, guest ] = fields.map(field => field.value);

        if ( ! host || ! score || ! guest ) return;

        const entryEl = listEl.querySelector('li.active');
        
        const match = { host, score, guest, _id: entryEl.dataset._id };

        updateMatch(baseUrl, match, (result) => {
            console.log(baseUrl)
            loadEntries();
            fields.forEach(field => field.value = '');
            buttonAddMatchEl.disabled = false;
            buttonEditMatchEl.disabled = true;
        });

        
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('li');

        const match  = Object.assign({}, entryEl.dataset);
        deleteMatch(baseUrl, match, (result) => {
            deleteEntry(result);
        })
    }

    loadEntries();
}

document.addEventListener('DOMContentLoaded', init)