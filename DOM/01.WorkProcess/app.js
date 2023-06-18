function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let dateElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');


    let firstName, lastName, email, date, position, salary;
    let sum = 0;
    let hireButton = document.getElementById('add-worker');
    hireButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (firstNameElement.value != '' && lastNameElement.value != '' && emailElement.value != '' &&
            dateElement.value != '' && positionElement.value != '' && salaryElement.value != '') {

            let tabelBody = document.getElementById('tbody');
            firstName = firstNameElement.value;
            lastName = lastNameElement.value;
            email = emailElement.value;
            date = dateElement.value;
            position = positionElement.value;
            salary = salaryElement.value;

            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            dateElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';

            let trElement = document.createElement('tr');

            let tdFirstName = document.createElement('td');
            tdFirstName.textContent = firstName;

            let tdLastName = document.createElement('td');
            tdLastName.textContent = lastName;

            let tdEmail = document.createElement('td');
            tdEmail.textContent = email;

            let tdDate = document.createElement('td');
            tdDate.textContent = date;

            let tdPosition = document.createElement('td');
            tdPosition.textContent = position;

            let tdSalary = document.createElement('td');
            tdSalary.textContent = salary;

            let firedButton = document.createElement('button');
            firedButton.textContent = 'Fired';
            firedButton.setAttribute('class', 'fired');

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.setAttribute('class', 'edit');

            trElement.appendChild(tdFirstName);
            trElement.appendChild(tdLastName);
            trElement.appendChild(tdEmail);
            trElement.appendChild(tdDate);
            trElement.appendChild(tdPosition);
            trElement.appendChild(tdSalary);
            trElement.appendChild(firedButton);
            trElement.appendChild(editButton);

            tabelBody.appendChild(trElement);

            let sumElement = document.getElementById('sum');
            sum += Number(salary);
            sumElement.textContent = sum.toFixed(2);

            editButton.addEventListener('click', (ev) => {
                let currTarget = ev.currentTarget.parentNode;
                let elements = Array.from(currTarget.children);

                firstNameElement.value = elements[0].textContent;
                lastNameElement.value = elements[1].textContent;
                emailElement.value = elements[2].textContent;
                dateElement.value = elements[3].textContent;
                positionElement.value = elements[4].textContent;
                salaryElement.value = elements[5].textContent;

                let deletedElement = ev.currentTarget.parentNode;
                sum -= Number(salaryElement.value);
                sumElement.textContent = sum.toFixed(2);
                deletedElement.remove();
            });

            firedButton.addEventListener('click', (ev) => {
                let currTarget = ev.currentTarget.parentNode;
                let elements = Array.from(currTarget.children);
                sum -= Number(elements[5].textContent);
                sumElement.textContent = sum.toFixed(2);
                currTarget.remove();
            });
        }
    });
}
solve()