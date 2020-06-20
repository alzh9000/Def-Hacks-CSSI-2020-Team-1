$(document).ready(function () {
    AOS.init();

    // display cards of the equipment name + image
    $.getJSON('/assets/equipment.json', function (obj) {
        for (var i = 0; i < obj.length; i++) {
            let image = obj[i].imagelink;
            let name = obj[i].name;
            var newCard = '<div id="' + name + '" data-aos="zoom-in" class="card col-12"> <img class="card-img-top" src="' + image + '" alt="Equipment Image"> <div class="card-body"> <h5 class="card-title">' + name + '</h5> <div class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" id="' + i + '"> <label class="custom-control-label" for="' + i + '">Got it!</label> </div> </div> </div>';
            $(".card-columns").append(newCard);
        }
    });

    $('.searchbox-input').on('keyup', function () {
        console.log(filter);
        $('.card').show();
        var filter = $(this).val(); // get the value of the input, which we filter on
        console.log(filter);
        $('#eq-cards').find(".card-title:not(:contains(" + filter + "))").parent().css('display', 'none');
    });

});

function getRecipes() {
    return true;
}

fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));