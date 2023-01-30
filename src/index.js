import axios, { Axios } from "axios"
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry')
console.log(entryPoint)


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  const dogCard = document.createElement('div')
  const dogImage = document.createElement('img')
  const header3 = document.createElement('h3')
  // instantiating the elements
  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3>
    </div>
  */
  // set class names, attributes and text
  header3.textContent = `Breed: ${breed}`;
  dogImage.src = imageURL;
  dogCard.classList.add('dog-card');
  dogImage.classList.add('dog-image');

  // create the hierarchy
  dogCard.appendChild(dogImage)
  dogCard.appendChild(header3)
  console.log(dogCard);
  // add some interactivity
  dogCard.addEventListener('click', () => {
  dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard;
}
// dogCardMaker({imageURL: 'https://images.dog.ceo/breeds/rottweiler/n02106550_6978.jpg', breed: 'Rottweiler'})

// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file

// axios.get('https://dog.ceo/api/breeds/image/random')
// .then(res => {
//   console.log(res.data.message);
//   const dogCard = dogCardMaker({ imageURL: res.data.message, breed: 'Doge'})
//   entryPoint.appendChild(dogCard)
// })
// .catch(err => {
//   console.log(err);
// })
// .finally(() => console.log('OH MY GOD DONE!!'))

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

function getDogs(number, breed){
axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
.then(res => {
  res.data.message.forEach(element => {
    console.log(res);
    const dogCard = dogCardMaker({ imageURL: element, breed: breed });
    entryPoint.appendChild(dogCard)
  });
  
})
.catch(err => {
  console.log(err);
})
.finally(() => console.log('OH MY GOD DONE!!'))
}


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`
document.querySelector('button').addEventListener('click', () => {
  getDogs(4, 'mastiff');
  getDogs(4, 'appenzeller');
  getDogs(4, 'hound')
  getDogs(4, 'husky')
  getDogs(4, 'boxer')
  getDogs(4, 'pitbull')
  getDogs(4, 'doberman')
})

// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
