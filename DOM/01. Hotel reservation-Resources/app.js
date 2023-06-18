window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let checkInElement = document.getElementById('date-in');
    let checkOutElement = document.getElementById('date-out');
    let guestsElement = document.getElementById('people-count');

    let nextBtn = document.getElementById('next-btn');

    let firstName, lastName, checkIn, checkOut, guests;

    nextBtn.disabled = false;
    nextBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (firstNameElement.value !== '' && lastNameElement.value !== '' && checkInElement.value !== '' && checkOutElement.value !== '' &&
            guestsElement.value !== '') {

            let listElement = document.querySelector('.info-list');

            let liElement = document.createElement('li');
            liElement.setAttribute('class', 'reservation-content');

            let articleElement = document.createElement('article');
            let h3Element = document.createElement('h3');
            h3Element.textContent = 'Name: ' + firstNameElement.value + ' ' + lastNameElement.value;

            let pDateInElement = document.createElement('p');
            pDateInElement.textContent = 'From date: ' + checkInElement.value;

            let pDateOutElement = document.createElement('p');
            pDateOutElement.textContent = 'To date: ' + checkOutElement.value;

            let pGuestsElement = document.createElement('p');
            pGuestsElement.textContent = 'For ' + Number(guestsElement.value) + ' people';

            articleElement.appendChild(h3Element);
            articleElement.appendChild(pDateInElement);
            articleElement.appendChild(pDateOutElement);
            articleElement.appendChild(pGuestsElement);
            liElement.appendChild(articleElement);

            firstName = firstNameElement.value;
            lastName = lastNameElement.value;
            checkIn = checkInElement.value;
            checkOut = checkOutElement.value;
            guests = guestsElement.value;

            firstNameElement.value = '';
            lastNameElement.value = '';
            checkInElement.value = '';
            checkOutElement.value = '';
            guestsElement.value = '';
            nextBtn.disabled = true;

            let editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';
            let continueBtn = document.createElement('button');
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';
            liElement.appendChild(editBtn);
            liElement.appendChild(continueBtn);
            listElement.appendChild(liElement);

            editBtn.addEventListener('click', () => {
                firstNameElement.value = firstName;
                lastNameElement.value = lastName;
                checkInElement.value = checkIn;
                checkOutElement.value = checkOut;
                guestsElement.value = guests;
                let list = document.querySelector('.reservation-content');
                list.remove();
                nextBtn.disabled = false;
            });

            continueBtn.addEventListener('click', () => {
                let ulElement = document.querySelector('.confirm-list');
                let liElement = document.createElement('li');
                liElement.setAttribute('class', 'reservation-content');
                let articleElement = document.createElement('article');
                let h3Element = document.createElement('h3');
                h3Element.textContent = 'Name: ' + firstName + ' ' + lastName;
                let pDateInElement = document.createElement('p');
                pDateInElement.textContent = 'From date: ' + checkIn;
                let pDateOutElement = document.createElement('p');
                pDateOutElement.textContent = 'To date: ' + checkOut;
                let pGuestsElement = document.createElement('p');
                pGuestsElement.textContent = 'For ' + Number(guests) + ' people';

                articleElement.appendChild(h3Element);
                articleElement.appendChild(pDateInElement);
                articleElement.appendChild(pDateOutElement);
                articleElement.appendChild(pGuestsElement);
                liElement.appendChild(articleElement);
                ulElement.appendChild(liElement);

                let infoLIstElement = document.querySelector('.info-list');
                infoLIstElement.remove();
                let confirmBtn = document.createElement('button');
                confirmBtn.setAttribute('class', 'confirm-btn');
                confirmBtn.textContent = 'Confirm';
                let cancelBtn = document.createElement('button');
                cancelBtn.setAttribute('class', 'cancel-btn');
                cancelBtn.textContent = 'Cancel';

                liElement.appendChild(confirmBtn);
                liElement.appendChild(cancelBtn);

                confirmBtn.addEventListener('click', () => {
                    let list = document.querySelector('.reservation-content');
                    list.remove();
                    nextBtn.disabled = false;
                    let reservation = document.getElementById('verification');
                    let h1Element = document.createElement('h1');
                    h1Element.setAttribute('id', 'verification');
                    h1Element.setAttribute('class', 'reservation-confirmed');
                    h1Element.textContent = 'Confirmed.';
                    reservation.appendChild(h1Element);
                });

                cancelBtn.addEventListener('click', () => {
                    let list = document.querySelector('.reservation-content');
                    list.remove();
                    nextBtn.disabled = false;
                    let reservation = document.getElementById('verification');
                    let h1Element = document.createElement('h1');
                    h1Element.setAttribute('id', 'verification');
                    h1Element.setAttribute('class', 'reservation-cancelled');
                    h1Element.textContent = 'Cancelled.';
                    reservation.appendChild(h1Element);



                });
            });
        }
    });
}



    
    
