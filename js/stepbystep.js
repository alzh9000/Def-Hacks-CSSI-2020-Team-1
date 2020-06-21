$(document).ready(function () {
    var instructions = JSON.parse(localStorage.getItem('instructions'));
    //console.log(instructions);
    instructions = instructions[0].steps;
    console.log(instructions);

    for (var i = 0; i < instructions.length; i++) {
        var stepNumber = i + 1;
        var stepTitle = 'Step ' + stepNumber;
        if (i === 0 && i == instructions.length - 1) {
            var div = document.createElement('div');
            div.innerHTML = '<div class="card w-75 h-100 mx-auto my-auto border border-primary border-thick" id="' + i + '"> <div class="card-header"><h1 class="text-center">' + stepTitle + '</h1></div> <div class="card-body"><h2>' + instructions[i].step + '</h2></div> <div class="card-footer"></div></div>';
            //console.log(div);
            document.getElementById('instructions divs').append(div);
        } else if (i === 0) {
            var div = document.createElement('div');
            div.innerHTML = '<div class="card w-75 h-100 mx-auto my-auto border border-primary" id="' + i + '"> <div class="card-header"><h1 class="text-center">' + stepTitle + '</h1></div> <div class="card-body"><h2>' + instructions[i].step + '</h2></div> <div class="card-footer"><button style="float: right;" class="btn btn-success" type="button" onClick="nextPage(0)" id="next' + i + '">Next</button></div></div>';
            //console.log(div);
            document.getElementById('instructions divs').append(div);
        } else if (i == instructions.length - 1) {
            var div = document.createElement('div');
            div.innerHTML = '<div class="card w-75 h-100 mx-auto my-auto border border-primary" id="' + i + '"> <div class="card-header"><h1 class="text-center">' + stepTitle + '</h1></div> <div class="card-body"><h2>' + instructions[i].step + '</h2></div><div class="card-footer"><button class="btn btn-secondary" type="button" onClick="prevPage(' + i + ')" id="prev' + i + '">Previous</button></div></div>';
            //console.log(div);
            document.getElementById('instructions divs').append(div);
            var divAccess = '#' + i;
            $(divAccess).hide()
        } else {
            var div = document.createElement('div');
            div.innerHTML = '<div class="card w-75 h-100 mx-auto my-auto border border-primary" id="' + i + '"> <div class="card-header"><h1 class="text-center">' + stepTitle + '</h1></div> <div class="card-body"><h2>' + instructions[i].step + '</h2></div> <div class="card-footer"><button class="btn btn-secondary" type="button" onClick="prevPage(' + i + ')" id="prev' + i + '">Previous</button><button style="float: right;" class="btn btn-success" type="button" onClick="nextPage(' + i + ')" id="next' + i + '">Next</button></div></div>';
            //console.log(div);
            document.getElementById('instructions divs').append(div);
            var divAccess = '#' + i;
            $(divAccess).hide();
        }
        if (instructions[i].length != undefined) {
            var timer = document.createElement('div');
            var value;
            var str;
            if (instructions[i].length.unit === "minutes") {
                value = 60 * instructions[i].length.number;
                str = instructions[i].length.number + ":00";
            } else if (instructions[i].length.unit === "seconds") {
                value = 1 * instructions[i].length.number;
                str = "00:" + instructions[i].length.number;
            }
            timer.innerHTML = "<h1 class='text-center' id='timer" + i + "' data-val='" + value + "'>" + str + "</h1>";
            document.getElementById(i).append(timer);
        }
    }

    $('#next0').click(function () {
        $('#0').hide();
        $('#1').show();
    });
});

function nextPage(index) {
    var access1 = '#' + index;
    var access2 = '#' + (index + 1);
    $(access1).hide();
    $(access2).show();
    var myEle = document.getElementById("timer" + (index + 1));
    if (myEle) {
        var val = document.getElementById("timer" + (index + 1)).getAttribute('data-val');
        startTimer(val, myEle);
    }
}

function prevPage(index) {
    var access1 = '#' + index;
    var access2 = '#' + (index - 1);
    $(access1).hide();
    $(access2).show();
    var myEle = document.getElementById("timer" + (index - 1));
    if (myEle) {
        var val = document.getElementById("timer" + (index - 1)).getAttribute('data-val');
        startTimer(val, myEle);
    }
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}