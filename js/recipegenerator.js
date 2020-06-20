$(document).ready(function () {
    const baseimagelink = 'https://spoonacular.com/cdn/equipment_100x100/'
    let obj = JSON.parse('../assets/massiver.json');
    obj = obj.recipes;
    let eq = new Set();

    for (var i = 0; i < obj.length; i++) {
        var steps = obj[i]["analyzedInstructions"]["steps"];
        for (var j = 0; j < steps.length; j++) {
            var e = steps[j]["equipment"];
            for (var k = 0; k < e.length; k++) {
                let link = baseimagelink + e[k].image;
                let o = {
                    name: e[k].name,
                    imagelink: link,
                };
                eq.add(o);
            }
        }
    }

    console.log(eq);
})