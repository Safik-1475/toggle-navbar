// Select Element 
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Add Event Listener
navToggle.addEventListener('click', function () {
    // console.log('Hello');
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }

    // just one line code do toggle 
    links.classList.toggle('show-links');
})