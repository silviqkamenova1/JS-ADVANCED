window.addEventListener("load", solve);

function solve() {
  let titleElement = document.getElementById('post-title');
  let categoryElement = document.getElementById('post-category');
  let contentElement = document.getElementById('post-content');
  let clearBtn = document.getElementById('clear-btn')

  let title,category,content;
  let publishBtn = document.getElementById('publish-btn')
  publishBtn.addEventListener('click', () => {
    if(titleElement.value !== '' && categoryElement.value !== '' && contentElement.value !== ''){
      let ulElement = document.getElementById('review-list');

      let liElemetn = document.createElement('li');
      liElemetn.setAttribute('class', 'rpost');
      let articleElement = document.createElement('article');

      let h4Element = document.createElement('h4')
      h4Element.textContent = titleElement.value

      let pCategory = document.createElement('p');
      pCategory.textContent = `Category: ${categoryElement.value}`;

      let pContent = document.createElement('p');
      pContent.textContent = `Content: ${contentElement.value}`;

      articleElement.appendChild(h4Element)
      articleElement.appendChild(pCategory)
      articleElement.appendChild(pContent)

      let editBtn =document.createElement('button');
      editBtn.innerHTML = 'Edit';
      editBtn.setAttribute('class', 'action-btn edit');
      let approveBtn =document.createElement('button');
      approveBtn.innerHTML = 'Approve';
      approveBtn.setAttribute('class', 'action-btn approve');

      liElemetn.appendChild(articleElement);
      liElemetn.appendChild(approveBtn);
      liElemetn.appendChild(editBtn);
      ulElement.appendChild(liElemetn);

      title = titleElement.value;
      category = categoryElement.value;
      content = contentElement.value;

      titleElement.value = ''
      categoryElement.value = ''
      contentElement.value = ''

      editBtn.addEventListener('click', ()=>{
        let liElemetn = document.querySelector('.rpost');
        titleElement.value = title;
        categoryElement.value = category;
        contentElement.value = content;
        liElemetn.remove()
      })
      approveBtn.addEventListener('click', ()=>{
        let ulLIst = document.getElementById('published-list')

        let liElement = document.createElement('li')
        liElement.setAttribute('class', 'rpost');

        let article = document.createElement('article')

        let h4Element = document.createElement('h4')
        h4Element.innerHTML = title

        let pCategory = document.createElement('p');
        pCategory.innerHTML = `Category: ${category}`

        let pContent = document.createElement('p');
        pContent.innerHTML = `Content: ${content}`

        article.appendChild(h4Element);
        article.appendChild(pCategory);
        article.appendChild(pContent);
        liElement.appendChild(article)
        ulLIst.appendChild(liElement)
        liElemetn.remove()
      })
      clearBtn.addEventListener('click', ()=> {
        let liElement = document.querySelector('.rpost')
        liElement.remove()
      })
    }
  })

}
