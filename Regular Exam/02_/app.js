window.addEventListener("load", solve);

function solve() {

    function createElement(tag, properties, container) {
        const element = document.createElement(tag);

        Object.keys(properties).forEach(key => {
            if ( typeof properties[key] === 'object' ) {
                Object.assign(element[key], properties[key]);
            } else {
                element[key] = properties[key];
            }
        });

        if ( container ) container.append(element);

        return element;
    }

    const inputs = Array.from(document.querySelectorAll('#email, #event, #location'));
    
    const btnNextEl = document.querySelector('#next-btn');

    const previewListEl = document.querySelector('#preview-list');
    const eventListEl = document.querySelector('#event-list');

    btnNextEl.addEventListener('click', addHandler);

    function createEntry({ email, event, location }) {
        const entryEl = createElement('li', { className: 'application', dataset: { email, event, location }}, previewListEl);
        const articleEl = createElement('article', {}, entryEl);
        createElement('h4', { textContent: email }, articleEl);

        // const lineBreak = document.createElement('br');
        // const firstParagraph = createElement('p', { textContent: event }, articleEl);
        // const strong = document.createElement('strong');
        // const textnode = document.createTextNode("Event:"); 
        // strong.append(textnode);

        // firstParagraph.prepend(lineBreak)
        // firstParagraph.prepend(strong);

        // const lineBreak2 = document.createElement('br');
        // const secondParagraph = createElement('p', { textContent: location }, articleEl);
        // const strong2 = document.createElement('strong');
        // const textnode2 = document.createTextNode("location:"); 
        // strong2.append(textnode2);
        
        // secondParagraph.prepend(lineBreak2)
        // secondParagraph.prepend(strong2);        

        const firstParagraph = createElement('p', {}, articleEl);
  
        const strong = document.createElement('strong');
        const textnode = document.createTextNode("Event:"); 
        strong.appendChild(textnode);
        firstParagraph.appendChild(strong);
        const lineBreak = document.createElement('br');
        const text = document.createTextNode(event);
        firstParagraph.appendChild(lineBreak);
        firstParagraph.appendChild(text)    
        


        const secondParagraph = createElement('p', {}, articleEl);

        const strong2 = document.createElement('strong');
        const textnode2 = document.createTextNode("Location:"); 
        strong2.append(textnode2);
        secondParagraph.appendChild(strong2);
        const lineBreak2 = document.createElement('br');
        const text2 = document.createTextNode(location);
        secondParagraph.appendChild(lineBreak2);
        secondParagraph.appendChild(text2)


        createElement('button', { onclick: editHandler, className: 'action-btn edit', textContent: 'edit' }, entryEl);
        createElement('button', { onclick: confirmHandler, className: 'action-btn apply', textContent: 'apply' }, entryEl);
    }

    function addHandler(e) {
        e.preventDefault();

        const [ email, event, location ] = inputs.map(field => field.value);

        if ( ! email || ! event || ! location ) return;

        createEntry({ email, event, location });
        
        inputs.forEach(field => field.value = '');

        btnNextEl.disabled = true;
    }

    function editHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);
        
        entryEl.remove();

        btnNextEl.disabled = false;
    }

    function confirmHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');

        entryEl.remove();

        entryEl.querySelectorAll('button').forEach(btn => btn.remove());

        eventListEl.append(entryEl);


        btnNextEl.disabled = false;
    }  
}  