const API_KEY = 'live_6dp7FWHHTREaCTCSGjgr573r0nL32cHyEDrgIIC6rXLqlvSPMSeUp6dzRchqggNt';

const API_URL_RANDOM = [
  'https://api.thecatapi.com/v1/images/search',
  '?limit=3',
  `&api_key=${API_KEY}`,
].join('');

const API_URL_FAVOURITES = [
  'https://api.thecatapi.com/v1/favourites',
  '?limit=8',
  `&api_key=${API_KEY}`,
].join('');

const API_URL_FAVOURITES_DELETE = 'https://api.thecatapi.com/v1/favourites';

const spanErrorRandom = document.getElementById('error-random');
const spanErrorFav = document.getElementById('error-fav');

const button = document.querySelector('.cont__btn');
/* const favButton = document.querySelectorAll('.cont__fav-btn'); */

async function getRandomCats() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  
  console.log('Random');
  console.log(res);
  console.log(data);

  if (res.status !== 200) {
    spanErrorRandom.innerText = 'An error has ocurred: ' + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

    btn1.onclick = () => saveFavCat(data[0].id);
    btn2.onclick = () => saveFavCat(data[1].id);
    btn3.onclick = () => saveFavCat(data[2].id);
  }
}

async function getFavCats() {
  const res = await fetch(API_URL_FAVOURITES);
  console.log(res);
  
  console.log('Favs');
  console.log(res.status);
  
  if (res.status !== 200) {
    spanErrorFav.innerHTML = 'An error occurred: ' + res.status;
  } else {
    const data = await res.json();
    console.log(data);

    const section = document.querySelector('.fav');
    section.innerHTML = '';

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('My Favourites');
    h2.append(h2Text);
    const span = document.createElement('span');
    span.setAttribute('id', 'error-fav');

    div.append(h2, span);
    section.append(div);

    const toRender = [];

    data.forEach(cat => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Delete from favourites');
      btn.appendChild(btnText);
      btn.classList.add('fav__btn')
      btn.onclick = () => deleteFavCat(cat.id);

      img.src = cat.image.url;
      img.alt = 'favorite cats';
      img.classList.add('fav__img')

      article.append(img, btn);
      toRender.push(article);
    });

    section.append(...toRender);
  }
}

async function saveFavCat(id) {
  console.log('saveFavCats Clicked');
  const res = await fetch(API_URL_FAVOURITES, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ 
      'image_id': id,
    }),
  });
  
  const data = await res.json();

  console.log('Save');
  console.log(res)

  if (res.status !== 200) {
    spanErrorFav.innerText = 'An error occurred: ' + res.status + data.message;
  } else {
    console.log('Cat added to favourites');
    getFavCats();
  }
}

async function deleteFavCat(id) {
  console.log('deleteFavCats Clicked');
  const res = await fetch(`${API_URL_FAVOURITES_DELETE}/${id}`, {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  });
  
  const data = await res.json();

  console.log('Delete');
  console.log(res)

  if (res.status !== 200) {
    spanErrorFav.innerText = 'An error occurred: ' + res.status + data.message;
  } else {
    console.log('Cat deleted from favourites');
    getFavCats();
  }
}


getRandomCats()
getFavCats()

button.addEventListener('click', getRandomCats);

/* favButton.addEventListener('click', saveFavCats); */
