$(document).ready(function () {
    AOS.init();

    // display cards of the equipment name + image
    $.getJSON('/assets/equipment.json', function (obj) {
        for (var i = 0; i < obj.length; i++) {
            let image = obj[i].imagelink;
            let name = obj[i].name;
            var newCard = '<div class="card col-12"> <img class="card-img-top" src="' + image + '" alt="Equipment Image"> <div class="card-body"> <h5 class="card-title">' + name + '</h5> <div class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" id="' + name + '"> <label class="custom-control-label" for="' + name + '">Got it!</label> </div> </div> </div>';
            $(".card-columns").append(newCard);
        }
    });



});

function getRecipes() {
    return true;
}

fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));