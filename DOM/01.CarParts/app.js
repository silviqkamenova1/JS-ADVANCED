window.addEventListener('load', solve);

function solve() {
        let carModelElement = document.getElementById('car-model');
        let yearElment = document.getElementById('car-year');
        let partElement = document.getElementById('part-name');
        let partNumElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');
        let btnNext = document.getElementById('next-btn');

        let carModel, year, part, partNum, condition;
        btnNext.disabled = false;
        btnNext.addEventListener('click', (ev) => {
                ev.preventDefault();
                let validYear = Number(document.getElementById('car-year').value);
                if (carModelElement.value != '' && yearElment.value != '' && partElement.value != '' && partNumElement.value != '' && conditionElement.value != '') {
                        if (validYear > 1980 && validYear < 2023) {

                                carModel = carModelElement.value;
                                year = yearElment.value;
                                part = partElement.value;
                                partNum = partNumElement.value;
                                condition = conditionElement.value;

                                carModelElement.value = '';
                                yearElment.value = '';
                                partElement.value = '';
                                partNumElement.value = '';
                                conditionElement.value = '';
                                let unElment = document.querySelector('.info-list');

                                let liElment = document.createElement('li');
                                liElment.setAttribute('class', 'part-content');

                                let articleElement = document.createElement('article');

                                let pCar = document.createElement('p');
                                pCar.textContent = `Car Model: ${carModel}`;
                                let pYear = document.createElement('p');
                                pYear.textContent = `Car Year: ${year}`;
                                let pName = document.createElement('p');
                                pName.textContent = `Part Name: ${part}`;
                                let pPartNumber = document.createElement('p');
                                pPartNumber.textContent = `Part Number: ${partNum}`;
                                let pCondition = document.createElement('p');
                                pCondition.textContent = `Condition: ${condition}`;

                                let editBtn = document.createElement('button');
                                editBtn.textContent = 'Edit';
                                editBtn.setAttribute('class', 'edit-btn');
                                let continueBtn = document.createElement('button');
                                continueBtn.textContent = 'Continue';
                                continueBtn.setAttribute('class', 'continue-btn');

                                articleElement.appendChild(pCar);
                                articleElement.appendChild(pYear);
                                articleElement.appendChild(pName);
                                articleElement.appendChild(pPartNumber);
                                articleElement.appendChild(pCondition);


                                liElment.appendChild(articleElement);
                                liElment.appendChild(editBtn);
                                liElment.appendChild(continueBtn);
                                unElment.appendChild(liElment);
                                btnNext.disabled = true;

                                let completeImg = document.getElementById('complete-img');
                                completeImg.style.visibility = 'hidden';

                                let textContentElement = document.getElementById('complete-text');
                                textContentElement.textContent = '';

                                editBtn.addEventListener('click', () => {
                                        btnNext.disabled = false;
                                        carModelElement.value = carModel;
                                        yearElment.value = year;
                                        partElement.value = part;
                                        partNumElement.value = partNum;
                                        conditionElement.value = condition;

                                        let liElment = document.querySelector('.part-content');
                                        liElment.remove();
                                });
                                continueBtn.addEventListener('click', (ev) => {
                                        ev.preventDefault();
                                        let unElment = document.querySelector('.confirm-list');

                                        let liElment = document.createElement('li');
                                        liElment.setAttribute('class', 'part-content');

                                        let articleElement = document.createElement('article');

                                        let pCar = document.createElement('p');
                                        pCar.textContent = `Car Model: ${carModel}`;
                                        let pYear = document.createElement('p');
                                        pYear.textContent = `Car Year: ${year}`;
                                        let pName = document.createElement('p');
                                        pName.textContent = `Part Name: ${part}`;
                                        let pPartNumber = document.createElement('p');
                                        pPartNumber.textContent = `Part Number: ${partNum}`;
                                        let pCondition = document.createElement('p');
                                        pCondition.textContent = `Condition: ${condition}`;

                                        let confirmBtn = document.createElement('button');
                                        confirmBtn.textContent = 'Confirm';
                                        confirmBtn.setAttribute('class', 'confirm-btn');
                                        let cancelBtn = document.createElement('button');
                                        cancelBtn.textContent = 'Cancel';
                                        cancelBtn.setAttribute('class', 'cancel-btn');

                                        articleElement.appendChild(pCar);
                                        articleElement.appendChild(pYear);
                                        articleElement.appendChild(pName);
                                        articleElement.appendChild(pPartNumber);
                                        articleElement.appendChild(pCondition);


                                        liElment.appendChild(articleElement);
                                        liElment.appendChild(confirmBtn);
                                        liElment.appendChild(cancelBtn);
                                        unElment.appendChild(liElment);

                                        let removedUl = document.querySelector('.part-content');
                                        removedUl.remove();

                                        confirmBtn.addEventListener('click', () => {
                                                let removedEl = document.querySelector('.part-content');
                                                removedEl.remove();
                                                btnNext.disabled = false;
                                                let completeImg = document.getElementById('complete-img');
                                                completeImg.style.visibility = 'visible';

                                                let textContentElement = document.getElementById('complete-text');
                                                textContentElement.textContent = "Part is Ordered!";
                                        });
                                        cancelBtn.addEventListener('click', () => {
                                                let removedEl = document.querySelector('.part-content');
                                                removedEl.remove();
                                                btnNext.disabled = false;
                                        });
                                });
                        }

                }

        });
};




