// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var randomCoverImage = covers[getRandomIndex(covers)];
var randomCoverTitle = titles[getRandomIndex(titles)];
var randomCoverTagline1 = descriptors[getRandomIndex(descriptors)];
var randomCoverTagline2 = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇

window.addEventListener('load', useRandomCoverImage());
window.addEventListener('load', useRandomCoverTitle());
window.addEventListener('load', useRandomCoverTagline1());
window.addEventListener('load', useRandomCoverTagline2());
// // When page loads (event listener?) trigger Cover class using random
// // image, title, and tagline

function useRandomCoverImage() {
  coverImage.src = randomCoverImage;
}

function useRandomCoverTitle() {
  coverTitle.innerText = randomCoverTitle;
}

function useRandomCoverTagline1() {
  coverTagline1.innerText = randomCoverTagline1;
}

function useRandomCoverTagline2() {
  coverTagline2.innerText = randomCoverTagline2;
}

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

