$(document).ready(function () {
    AOS.init();
});

function getRecipes() {
    return true;
}

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));