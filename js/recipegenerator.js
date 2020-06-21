/* $(document).ready(function () {
    const baseimagelink = 'https://spoonacular.com/cdn/equipment_100x100/'

    $.getJSON('/js/massiver.json', function (obj) {

        obj = obj.recipes;
        let eq = [];

        for (var i = 0; i < obj.length; i++) {
            var analyzed = obj[i].analyzedInstructions[0];
            // only proceed if there exist analyzed instructions for the step
            if (analyzed) {
                var s = analyzed.steps;

                for (var j = 0; j < s.length; j++) {
                    var e = s[j]["equipment"];
                    for (var k = 0; k < e.length; k++) {
                        let link = baseimagelink + e[k].image;
                        let o = {
                            name: e[k].name,
                            imagelink: link,
                        };
                        var repeated = false;
                        for (var x = 0; x < eq.length; x++) {
                            if (eq[x].name === o.name) {
                                repeated = true;
                            }
                        }
                        if (!repeated) eq.push(o);
                    }
                }
            }
        }

        console.log(eq);

    });

}) */