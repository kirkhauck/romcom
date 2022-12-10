var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// EVENT LISTENERS
window.addEventListener('load', randomizeBook);
randomCoverButton.addEventListener('click', randomizeBook);
saveCoverButton.addEventListener('click', saveCover);
makeNewButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', showSavedView);
homeButton.addEventListener('click', showHomeView);
createNewBookButton.addEventListener('click', function(){
  createUserBook(event)
});

//FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeBook() {
  var randomCoverImage = covers[getRandomIndex(covers)];
  var randomCoverTitle = titles[getRandomIndex(titles)];
  var randomCoverTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomCoverTagline2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomCoverImage, randomCoverTitle, randomCoverTagline1, randomCoverTagline2);

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function saveCover() {
  var coverExists = false;

  for (i = 0; i < savedCovers.length; i++) {
    if (currentCover === savedCovers[i]) {
      coverExists = true;
    }
  }
  
  if(coverExists === false) {
    savedCovers.push(currentCover)
  }
}

  // for (i = 0; i < savedCovers.length; i++) {
  //   if (currentCover === savedCovers[i]) {
  //     console.log(coverExists);
  //     coverExists = true;
  //   }
  // }

  // if (coverExists) {
  //   savedCovers.push(currentCover);
  // }


function showFormView() {
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showSavedView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showHomeView() {
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}

function createUserBook(event) {
  event.preventDefault()
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);

  var userCoverImage = userCover.value;
  var userCoverTitle = userTitle.value;
  var userCoverTagline1 = userDesc1.value;
  var userCoverTagline2 = userDesc2.value;
  currentCover = new Cover(userCoverImage, userCoverTitle, userCoverTagline1, userCoverTagline2);

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;

  showHomeView();
  
}