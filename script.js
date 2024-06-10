// Change the text from the HTML
document.getElementById('existing-paragraph').textContent = "Denne teksten er endret med javaScript";

// create a new element
const newParagraph = document.createElement('p');

// take newParagraph to make a new text 
newParagraph.textContent = "Denne teksten og paragrafet er generert med javaScript";

// Finding the Id element in HTML and place it in JavaScript
const contentDiv = document.getElementById('content-div');

// Place the new paragraf in the div
contentDiv.appendChild(newParagraph);