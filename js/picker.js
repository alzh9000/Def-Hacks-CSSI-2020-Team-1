$(document).ready(function () {
    var container = document.querySelector('.container-fluid');

    var mc = new Hammer(container);
    mc.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
    });

    mc.on("swipeleft", function (event) {
        console.log(event.type);
    });

    mc.on("swiperight", function (event) {
        console.log(event.type);
    });

    mc.on("tap", function (event) {
        console.log(event.type);
    });
})