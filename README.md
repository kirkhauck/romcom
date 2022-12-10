# RomCom  

### Abstract:

This app creates a gallery to generate and store book covers consisting of a cover image, book title, and subtitle consisting of two taglines.

The features include the following:
- Ability to change between a Home View, Saved Covers View, and Form View by clicking the respective buttons on the top of the webpage.
- A random cover generator, which is invoked when the user clicks the "Show New Random Cover" button on the Home View.
- A custom cover generator, utilizing the form on the Form View. The user fills out the different fields in the form. When the user clicks the "Make my book" button, the a new cover is generated with the user inputs and the view is changed back to Home View with the custom cover displayed.
- Ability to save random and custom covers by clicking the "Save Cover" button on the Home View. When the button is clicked, the current cover is added to the gallery in the Saved Covers View. Duplicates will not be saved.
- Ability to delete a cover in the gallery by double clicking its image.

### Installation Instructions:
The deployed project can be viewed [here](https://kirkhauck.github.io/romcom/).

To clone a copy of the project to a remote repository, follow these steps:

1. Go to the project [page on GitHub](https://github.com/kirkhauck/romcom).
2. Fork the repository.
3. Click the "<> Code" button and copy your preferred clone link.
4. Open your Terminal.
5. Navigate to the directory you would like to clone the repository to.
6. Enter the command `git clone cloneLink` replacing `cloneLink` with the link you copied in Step 3
7. Use command `code .` to open the project in your preferred text editor.

### Preview of App:

![App Preview](https://media.giphy.com/media/2uQWut5hFTvITKVr68/giphy.gif)

### Context:

This project was completed in approximately 20 hours using the driver-navigator method of coding.

Both contributors were in Module 1 of the front-end program at [Turing School of Software Development](https://turing.edu/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtekpL5eXls3V1GFB7J1vblQtfGKfXEH5afAgzUsYH4TkqlkrmZvylhoCRKcQAvD_BwE).

### Contributors:

[Christopher Cole](https://github.com/chrometaphor) and [Kirk Hauck](https://github.com/kirkhauck)

### Learning Goals:
- Write clean, DRY JavaScript
    - Use a provided class by creating object instances using the new keyword
    - Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Explore the connection between HTML, CSS, and JavaScript
    - Practice reading, understanding, and using provided code
- Write code collaboratively
    - Document changes with atomic commits & thorough code reviews
    - Communicate, troubleshoot, and plan effectively as a team

### Wins + Challenges:
Challenge: Did not know how to utilize Class instantiation to display a new cover.

Win: After reading the provided HTML and CSS files and referencing our code to generate a random cover, we knew we needed to somehow make a new HTML element and add the provided CSS class using JavaScript. After researching online and asking questions of fellow Turing cohort members, we arrived at a solution using `document.createElement()` and  `Element.classList.add()`.

Challenge: Did not know how to utilize an event listern for an element that was not present upon page load.

Win: After multiple failed attempts trying to use conditionals, we received direction from a fellow Turing student to research the `event` object. After researching, we were able to utilize event bubbling to successfuly create an event listener to trigger an anonymous function so we could utilize our `deleteCover(event)` function.