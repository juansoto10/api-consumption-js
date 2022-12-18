const URL = 'https://api.thecatapi.com/v1/images/search';

document.addEventListener('DOMContentLoaded', getCat);

async function getCat() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
  }
  catch (error) {
    console.log(error)
  } 
}

const button = document.querySelector('button');
button.addEventListener('click', getCat);