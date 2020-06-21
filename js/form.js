$(document).ready(function () {
    AOS.init();

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
            var arr = await analyzeImage(base64data);

            //var arr = ["Orange", "Apple"];
            console.log(arr);
            document.getElementById("input-file-now").value = "";
            for (var i = 0; i < arr.length; i++) {
                var fitem = '<div id=' + arr[i] + '">' + arr[i] + '<button type="button" class="close" aria-hidden="true">x</button></div>';
                //console.log(fitem);
                if (document.getElementById(arr[i]) === null) {
                    $("#food-items").append(fitem);
                }
            }
        })
    });

    $(".close").click(function (e) {
        console.log("hi!")
        console.log($(this).parent());
        e.preventDefault();
        $(this).parent().remove();
    });

});

async function analyzeImage(url) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "requests": [{
            "image": {
                "content": url
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
    fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAlfumiq1JqbC8naT9APEDFrZt6jLKyUSw", requestOptions)
        .then(response => response.text())
        .then((result) => {
            //console.log(result);
            return Promise.resolve(result);
        })
        .catch(error => console.log('error', error));
}


function objToFood(o) {
    o = o["responses"];
    var arr = [];
    for (var i = 0; i < o.length; i++) {
        arr.push(o[i].description);
    }
    return arr;
}