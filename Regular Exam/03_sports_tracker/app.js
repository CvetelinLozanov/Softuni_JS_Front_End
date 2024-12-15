function loadWorkouts(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function createWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function updateWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl + workout._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function deleteWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl + workout._id, {
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

    // Global variables

    // api -> resource, dom -> entry

    const baseUrl = 'http://localhost:3030/jsonstore/workout/';

    const btnLoadEntries = document.querySelector('#load-workout')

    const inputs = [...document.querySelectorAll('#workout, #location, #date')];

    const btnAddEntryEl = document.querySelector('#add-workout');
    const btnEditEntryEl = document.querySelector('#edit-workout');

    const listEntriesEl = document.querySelector('#list');
    let id = '';
    // attach event handlers

    btnLoadEntries.addEventListener('click', loadEntries)
    btnAddEntryEl.addEventListener('click', createHandler);
    btnEditEntryEl.addEventListener('click', updateHandler);

    // DOM Functions

    function clearHTML() {
        listEntriesEl.innerHTML = '';
    }

    function loadEntries() {
        listEntriesEl.innerHTML = '';

        loadWorkouts(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
    }

    function createEntry({ workout, location, date, _id }) {
        const container = createElement('div', { className: 'container', dataset: { workout, location, date, _id } }, listEntriesEl);
        createElement('h2', { textContent: workout}, container)
        createElement('h3', { textContent: date }, container)
        createElement('h3', { id: 'location', textContent: location }, container)
        const buttonsEl = createElement('div', { className: 'buttons-container' }, container);
        createElement('button', { textContent: 'Change', onclick: changeHandler, className: 'change-btn' }, buttonsEl);
        createElement('button', { textContent: 'Done', onclick: deleteHandler, className: 'delete-btn'}, buttonsEl);
    }

    function deleteEntry({ workout, location, date, _id }) {
        listEntriesEl.querySelector(`div[data-_id="${_id}"]`).remove();
    }

    // Event handlers

    function createHandler(e) {
        e.preventDefault();

        const [ workout, location, date ] = inputs.map(field => field.value);

        if ( ! workout || ! location || ! date ) return;

        const resourceObject = { workout, location, date };

        // console.log(resourceObject);

        loadEntries();
        createWorkout(baseUrl, resourceObject, (result) => {
            
            createEntry(result);
        });

       
        inputs.forEach(field => field.value = '');

    }

    function changeHandler(e) {
        const entryEl = e.target.parentElement.parentElement;
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);
        id = entryEl.dataset._id
        entryEl.classList.add('active');
        entryEl.remove();

        btnAddEntryEl.disabled = true;
        btnEditEntryEl.disabled = false;
    }

    function updateHandler(e) {
        e.preventDefault();
        console.log(id);
        const [ workout, location, date ] = inputs.map(field => field.value);

        if ( ! workout || ! location || ! date ) return;
   

        // const entryEl = listEntriesEl.querySelector('.active');

        const resourceObject = { workout, location, date, _id: id };

        updateWorkout(baseUrl, resourceObject, (result) => {
            loadEntries();
            inputs.forEach(field => field.value = '');
            btnAddEntryEl.disabled = false;
            btnEditEntryEl.disabled = true;
        });
    }

    function deleteHandler(e) {
        const entryEl = e.target.parentElement.parentElement;
        const resourceObject = Object.assign({}, entryEl.dataset);
        
        deleteWorkout(baseUrl, resourceObject, deleteEntry);
    }    

   
}

document.addEventListener('DOMContentLoaded', init);