const API_KEY = 'live_6dp7FWHHTREaCTCSGjgr573r0nL32cHyEDrgIIC6rXLqlvSPMSeUp6dzRchqggNt';

const API_URL_RANDOM = [
  'https://api.thecatapi.com/v1/images/search',
  '?limit=3',
  `&api_key=${API_KEY}`,
].join('');

const API_URL_FAVOURITES = [
  'https://api.thecatapi.com/v1/favourites',
  '?limit=3',
  `&api_key=${API_KEY}`,
].join('');

const spanError = document.getElementById('error');

/* document.addEventListener('DOMContentLoaded', getCats); */
const button = document.querySelector('.cont__btn');

async function getRandomCats() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  
  console.log('Random');
  console.log(data);

  if (res.status !== 200) {
    spanError.innerText = 'An error has ocurred: ' + res.status;
  } else {
    const images = document.querySelectorAll('.cont__img');
    const arrImages = [...images];
    console.log('Array Images');
    console.log(arrImages);

    arrImages.forEach((image, index) => {
      console.log('Images urls');
      console.log(data[index].url);
      image.src = data[index].url;
    });
  }
}



button.addEventListener('click', getRandomCats);


async function getFavCats() {
  try {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    const images = document.querySelectorAll('.fav__img');
    const arrImages = [...images];

    console.log('Favs');
    console.log(data);
    console.log(arrImages);
    
    arrImages.forEach((image, index) => {
      console.log(data[index].url);
      image.src = data[index].url;
    });
  }
  catch (error) {
    console.log(error)
  } 
}


getRandomCats()
getFavCats()