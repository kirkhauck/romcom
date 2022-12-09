var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');
var homePageButton = document.querySelector('.home-button');
var formPageButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var randomBookButton = document.querySelector('.random-cover-button');
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('load', randomizeBook);
randomBookButton.addEventListener('click', randomizeBook);
formPageButton.addEventListener('click', showFormPage);

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
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
}

function showFormPage() {
  homePage.classList.add('hidden');
  randomBookButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formPage.classList.remove('hidden');
  homePageButton.classList.remove('hidden');
}