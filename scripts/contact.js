// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const formElement = document.querySelector('form');
const removeh2 = document.querySelector('h2');

formElement.onsubmit = function(e) {
    e.preventDefault();

    formElement.innerHTML = '<p class = "message">Thank you for your message!</p>';
    removeh2.remove();
};


