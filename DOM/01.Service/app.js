window.addEventListener('load', solve);

function solve() {
    let productElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');


    let product, description, name, phone;
    let sendBtn = document.querySelector('button[type="submit"]');
    sendBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (descriptionElement.value != '' && nameElement.value != '' && phoneElement.value != '') {
            let recivedInput = document.getElementById('received-orders');

            product = productElement.value;
            description = descriptionElement.value;
            name = nameElement.value;
            phone = phoneElement.value;
            productElement.value = '';
            descriptionElement.value = '';
            nameElement.value = '';
            phoneElement.value = '';

            let divElement = document.createElement('div');
            divElement.setAttribute('class', 'container');

            let h2Element = document.createElement('h2');
            h2Element.textContent = `Product type for repair: ${product}`;

            let h3Element = document.createElement('h3');
            h3Element.textContent = `Client information: ${name}, ${phone}`;

            let h4Element = document.createElement('h4');
            h4Element.textContent = `Description of the problem: ${description}`;

            let startBtn = document.createElement('button');
            startBtn.textContent = 'Start repair';
            startBtn.setAttribute('class', 'start-btn');

            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish repair';
            finishBtn.setAttribute('class', 'finish-btn');
            finishBtn.disabled = true;
            divElement.appendChild(h2Element);
            divElement.appendChild(h3Element);
            divElement.appendChild(h4Element);
            divElement.appendChild(startBtn);
            divElement.appendChild(finishBtn);

            recivedInput.appendChild(divElement);

            startBtn.addEventListener('click', () => {
                startBtn.disabled = true;
                finishBtn.disabled = false;
            });

            finishBtn.addEventListener('click', (ev) => {
                let input = ev.currentTarget.parentNode;
                let completeElement = document.getElementById('completed-orders');

                let divElement = document.createElement('div');
                divElement.setAttribute('class', 'container');

                let h2Element = document.createElement('h2');
                h2Element.textContent = `Product type for repair: ${product}`;

                let h3Element = document.createElement('h3');
                h3Element.textContent = `Client information: ${name}, ${phone}`;

                let h4Element = document.createElement('h4');
                h4Element.textContent = `Description of the problem: ${description}`;

                divElement.appendChild(h2Element);
                divElement.appendChild(h3Element);
                divElement.appendChild(h4Element);
                completeElement.appendChild(divElement);
                input.remove();

                let clearBtn = document.querySelector('.clear-btn');
                clearBtn.addEventListener('click', () => {
                    let allDivs = document.querySelector('.container');
                    allDivs.remove();
                });
            });
        }

    });
}