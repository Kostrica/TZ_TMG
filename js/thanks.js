/*parallax background*/


new universalParallax().init({
  speed: 4
});


// add a username to the page

const newName = localStorage.getItem('name');
const myName = document.getElementById('name');

myName.innerText = newName;
