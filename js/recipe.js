$(document).ready(function () {
    AOS.init();
    const recipeId = localStorage.getItem("r.id")

    var monkeys = "52b37" + "53a" + "b4ec4157a" + "0c130f7c" + "47586d8";
    var url = 'https://api.spoonacular.com/recipes/' + recipeId + '/information?apiKey=' + monkeys + '&includeNutrition=true' ;
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
            localStorage.setItem('recipe-details', result);
            //console.log(result);
        }).then(function () {
            // ALL CODE HERE

            res = JSON.parse(localStorage.getItem('recipe-details'));
            console.log(res);

            // Set the HTML to display the correct recipe
            document.getElementById("recipeimage").src = res.image;
            document.getElementById("recipetitle").innerHTML = res.title;
            document.getElementById("time").innerHTML = ' ' + res.readyInMinutes + ' ';
            document.getElementById("summary").innerHTML = res.summary;
            
            var ingr = res.extendedIngredients;
            for (var j = 0; j < ingr.length; j++) {
                //console.log(ingr[i]);
                var image = 'https://spoonacular.com/cdn/ingredients_250x250/' + ingr[j].image;
                var inCard = '<div id="' + ingr[j].original + '"  class="card col-2"> <div class="card-header"><img height="225" width="auto" class="card-img-top" src="' + image + '" alt="Equipment Image"></div> <div class="card-body"> <h5 class="card-title">' + ingr[j].original + '</h5> </div></div>';
                $('#ing').append(inCard);
            }

            let instructionsLength = res.analyzedInstructions[0].steps.length;
            let step = document.createElement('div')
            for (var i=0; i<instructionsLength; i++){
                let stepContent = document.createElement('div');
                let stepNumber = i + 1
                
                stepContent.innerHTML ='<h4 class="text-left">Step ' + stepNumber + '</h4> <p>' + res.analyzedInstructions[0].steps[i].step + '</p>';
                step.appendChild(stepContent);    
            }
            document.getElementById('recipe-container').append(step);



        }).catch(error => console.log('error', error));

 });
