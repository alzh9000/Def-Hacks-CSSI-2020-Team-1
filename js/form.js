$(document).ready(function () {
    AOS.init();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
    $('#q5').hide();
    $('#q6').hide();
    $('#q7').hide();

    $('#next1').click(function () {
        $('#q1').hide();
        $('#q2').show();
        $('#bar').attr('style', 'width: 28.57%');
    })

    $('#next2').click(function () {
        $('#q2').hide();
        $('#q3').show();
        $('#bar').attr('style', 'width: 42.86%');
    })

    $('#next3').click(function () {
        $('#q3').hide();
        $('#q4').show();
        $('#bar').attr('style', 'width: 57.14%');
    })

    $('#next4').click(function () {
        $('#q4').hide();
        $('#q5').show();
        $('#bar').attr('style', 'width: 73.43%');
    })

    $('#next5').click(function () {
        $('#q5').hide();
        $('#q6').show();
        $('#bar').attr('style', 'width: 85.71%');
    })

    $('#next6').click(function () {
        $('#q6').hide();
        $('#q7').show();
        $('#bar').attr('style', 'width: 100%');
    })

    $('#prev2').click(function () {
        $('#q2').hide();
        $('#q1').show();
        $('#bar').attr('style', 'width: 14.29%');
    })

    $('#prev3').click(function () {
        $('#q3').hide();
        $('#q2').show();
        $('#bar').attr('style', 'width: 28.57%');
    })

    $('#prev4').click(function () {
        $('#q4').hide();
        $('#q3').show();
        $('#bar').attr('style', 'width: 42.86%');
    })

    $('#prev5').click(function () {
        $('#q5').hide();
        $('#q4').show();
        $('#bar').attr('style', 'width: 57.14%');
    })

    $('#prev6').click(function () {
        $('#q6').hide();
        $('#q5').show();
        $('#bar').attr('style', 'width: 73.43%');
    })

    $('#prev7').click(function () {
        $('#q7').hide();
        $('#q6').show();
        $('#bar').attr('style', 'width: 85.71%');
    })

    $('#subm').click(function () {
        var query = document.getElementById('user_req').value;

        var cuisine = "";
        if (document.getElementById("MiddleEastern").checked) cuisine = cuisine.concat("Middle Eastern,");
        if (document.getElementById("European").checked) cuisine = cuisine.concat("European,");
        if (document.getElementById("British").checked) cuisine = cuisine.concat("British,");
        if (document.getElementById("French").checked) cuisine = cuisine.concat("French,");
        if (document.getElementById("German").checked) cuisine = cuisine.concat("German,");
        if (document.getElementById("Southern").checked) cuisine = cuisine.concat("Southern,");
        if (document.getElementById("Italian").checked) cuisine = cuisine.concat("Italian,");
        if (document.getElementById("Mediterranean").checked) cuisine = cuisine.concat("Mediterranean,");
        if (document.getElementById("Chinese").checked) cuisine = cuisine.concat("Chinese,");
        if (document.getElementById("Asian").checked) cuisine = cuisine.concat("Asian,");
        if (document.getElementById("Indian").checked) cuisine = cuisine.concat("Indian,");
        if (document.getElementById("Japanese").checked) cuisine = cuisine.concat("Japanese,");
        if (cuisine.length > 0) cuisine = cuisine.slice(0, -1);

        var diet = ""; //THIS SHOULD BE CHOOSE 1 ONLY
        if (document.getElementById("vegetarian").checked) diet = "Vegetarian";
        if (document.getElementById("vegan").checked) diet = "Vegan";
        if (document.getElementById("gluten-free").checked) diet = "Gluten-Free";
        if (document.getElementById("dairy-free").checked) diet = "Dairy-Free";

        var ingredients = "";
        $('.food').each(function (index, item) {
            ingredients = ingredients.concat($(item).attr('id') + ",");
        });
        if (ingredients.length > 0) ingredients = ingredients.slice(0, -1);

        var maxReadyTime = 9999;
        if (document.getElementById("max_time").value != "") maxReadyTime = document.getElementById("max_time").value;

        var minCalories = 0;
        if (document.getElementById("min_cal").value != "") minCalories = document.getElementById("min_cal").value;

        var maxCalories = 9999;
        if (document.getElementById("max_cal").value != "") maxCalories = document.getElementById("max_cal").value;

        var equipment = "";
        $.getJSON('/assets/equipment.json', function (obj) {
            for (var i = 0; i < obj.length; i++) {
                let image = obj[i].imagelink;
                let name = obj[i].name;
                let checkboxId = 'Card' + name;
                if (document.getElementById(checkboxId).checked) equipment = equipment.concat(name + ",");
            }

            if (equipment.length > 0) equipment = equipment.slice(0, -1);


            //continue code here, not outside
            var monkeys = "959d" + "d702f1c" + "349d49e3" + "aade65" + "a3e1f98";
            var url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + monkeys + '&query=' + query + '&cuisine=' + cuisine + '&diet=' + diet + '&equipment=' + equipment + '&includeIngredients=' + ingredients + '&maxReadyTime=' + maxReadyTime + '&minCalories=' + minCalories + '&maxCalories=' + maxCalories + '&number=20';
            console.log(url);

            var myHeaders = new Headers();
            myHeaders.append("Cookie", "__cfduid=d63ccfdaca9db36c62947f6b2959b67931592723818");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch(url, requestOptions)
                .then(response => response.text())
                .then((result) => {
                    // put code here for displaying the result
                    localStorage.setItem('recipe-results', result);
                    console.log(result);
                })
                .catch(error => console.log('error', error));
        });

    })


    // display cards of the equipment name + image
    $.getJSON('/assets/equipment.json', function (obj) {
        for (var i = 0; i < obj.length; i++) {
            let image = obj[i].imagelink;
            let name = obj[i].name;
            let checkboxId = 'Card' + name;
            // REMOVED ANIMATIONS FOR NOW: data-aos="zoom-in"
            var newCard = '<div id="' + name + '"  class="card col-12 eq"> <img class="card-img-top" src="' + image + '" alt="Equipment Image"> <div class="card-body"> <h5 class="card-title">' + name + '</h5> <div class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" id="' + checkboxId + '"> <label class="custom-control-label" for="' + checkboxId + '">Got it!</label> </div> </div> </div>';
            $(".card-columns").append(newCard);
        }
    });

    $('.searchbox-input').on('keyup', function () {
        $('.eq').show();
        var filter = $(this).val();
        //console.log(filter);
        //console.log($('.hah'));
        $('.eq').each(function (index, item) {
            //console.log($(item).attr('id'));
            if (!$(item).attr('id').includes(filter)) {
                $(item).hide();
            }
        });


    });

    $("input[type=file]").on('change', function () {
        //var url = URL.createObjectURL($("#input-file-now").prop("files")[0]);
        var reader = new FileReader();
        reader.readAsDataURL(($("#input-file-now").prop("files")[0]));
        var base64data;
        const loadbase64data = new Promise((resolve, reject) => {
            reader.onloadend = function () {
                base64data = reader.result;
                var n = base64data.indexOf("base64,");
                base64data = base64data.slice(n + 7);
                resolve(base64data);
            }
        })
        loadbase64data.then(async function (base64data) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "requests": [{
                    "image": {
                        "content": base64data
                    },
                    "features": [{
                        "type": "LABEL_DETECTION"
                    }]
                }]
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const key = "AIzaS" + "yDaMp" + "1Iuy61ANGa9" + "RiFS3-PzYYgaV2tgBE";
            fetch("https://vision.googleapis.com/v1/images:annotate?key=" +
                    key, requestOptions)
                .then(response => response.text())
                .then((result) => {
                    //console.log(result);
                    //var arr = ["Orange", "Apple"];
                    result = JSON.parse(result);
                    console.log(result);
                    var arr = objToFood(result);
                    console.log(arr);
                    document.getElementById("input-file-now").value = "";
                    for (var i = 0; i < arr.length; i++) {
                        var idName = "'" + arr[i] + "'";
                        var fitem = '<div class="food" id=' + idName + '>' + arr[i] + '<button type="button" class="close" aria-hidden="true" onClick="removeParentDiv(' + idName + ')">x</button></div>';
                        //console.log(fitem);
                        if (document.getElementById(arr[i]) === null) {
                            $("#food-items").append(fitem);
                        }
                    }
                })
                .catch(error => console.log('error', error));
        })
    });

    $('#add').click(function () {
        var idName = "'" + document.getElementById('textIngr').value + "'";
        var fitem = '<div class="food" id=' + idName + '>' + document.getElementById('textIngr').value + '<button type="button" class="close" aria-hidden="true" onClick="removeParentDiv(' + idName + ')">x</button></div>';
        if (document.getElementById(document.getElementById('textIngr')) === null) {
            $("#food-items").append(fitem);
        }
    });
});

function removeParentDiv(id) {
    var myobj = document.getElementById(id);
    myobj.remove();
}

// async function analyzeImage(url) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var raw = JSON.stringify({
//         "requests": [{
//             "image": {
//                 "content": url
//             },
//             "features": [{
//                 "type": "LABEL_DETECTION"
//             }]
//         }]
//     });
//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };
//     fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAlfumiq1JqbC8naT9APEDFrZt6jLKyUSw", requestOptions)
//         .then(response => response.text())
//         .then((result) => {
//             //console.log(result);
//             return Promise.resolve(result);
//         })
//         .catch(error => console.log('error', error));
// }


function objToFood(o) {
    o = o.responses[0].labelAnnotations;
    var arr = [];
    for (var i = 0; i < o.length; i++) {
        arr.push(o[i].description);
    }
    return arr;
}