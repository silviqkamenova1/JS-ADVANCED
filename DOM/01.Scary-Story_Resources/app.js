window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let titleElement = document.getElementById('story-title');
  let genreElement = document.getElementById('genre');
  let storyElement = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn');

  let firstName, lastName, age, title, genre, story;

  publishBtn.disabled = false;
  publishBtn.addEventListener('click', () => {
    if (firstNameElement.value !== '' && lastNameElement.value !== ''
      && ageElement.value !== '' && titleElement.value !== ''
      && genreElement.value !== '' && storyElement.value !== '') {

      let ulElemet = document.getElementById('preview-list');

      let liElement = document.createElement('li');
      liElement.setAttribute('class', 'story-info');

      let article = document.createElement('article');

      let h4Element = document.createElement('h4');
      h4Element.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

      let pAgeElement = document.createElement('p');
      pAgeElement.textContent = `Age: ${ageElement.value}`;

      let pTitleElement = document.createElement('p');
      pTitleElement.textContent = `Title: ${titleElement.value}`;

      let pGenreElement = document.createElement('p');
      pGenreElement.textContent = `Title: ${genreElement.value}`;

      let pStoryElement = document.createElement('p');
      pStoryElement.textContent = storyElement.value;

      article.appendChild(h4Element);
      article.appendChild(pAgeElement);
      article.appendChild(pTitleElement);
      article.appendChild(pGenreElement);
      article.appendChild(pStoryElement);

      liElement.appendChild(article);

      let saveBtn = document.createElement('button');
      saveBtn.setAttribute('class', 'save-btn');
      saveBtn.textContent = 'Save Story';
      let editBtn = document.createElement('button');
      editBtn.setAttribute('class', 'edit-btn');
      editBtn.textContent = 'Edit Story';
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.textContent = 'Delete Story';

      liElement.appendChild(saveBtn);
      liElement.appendChild(editBtn);
      liElement.appendChild(deleteBtn);
      ulElemet.appendChild(liElement);

      firstName = firstNameElement.value;
      lastName = lastNameElement.value;
      age = ageElement.value;
      title = titleElement.value;
      genre = genreElement.value;
      story = storyElement.value;
      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      titleElement.value = '';
      genreElement.value = '';
      storyElement.value = '';

      publishBtn.disabled = true;
      saveBtn.disabled = false;
      editBtn.disabled = false;
      deleteBtn.disabled = false;

      editBtn.addEventListener('click', () => {
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        ageElement.value = age;
        titleElement.value = title;
        genreElement.value = genre;
        storyElement.value = story;

        let listElement = document.querySelector('.story-info');
        listElement.remove();
        publishBtn.disabled = false;
      });

      saveBtn.addEventListener('click', () => {
        let divElement1 = document.querySelector('.form-wrapper');
        let divElement2 = document.getElementById('side-wrapper');
        divElement1.remove();
        divElement2.remove();
        let div = document.getElementById('main');
        let h1Element = document.createElement('h1');
        h1Element.textContent = "Your scary story is saved!";
        div.appendChild(h1Element);
      });


      deleteBtn.addEventListener('click', () => {
        let liElements = document.querySelector('.story-info');
        liElements.remove();
        publishBtn.disabled = false;
      });

    }
  });


}
