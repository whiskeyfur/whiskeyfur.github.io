class Person {
    name     = null;
    race     = null;
    gender   = null;
    appears  = null;
    age      = 0;
    energy   = 100;
    health   = 100;
    pregnant = null;

    place    = null;
    job      = null;

    constructor() {
        this.gender = (Math.floor(Math.random() * 2) ? "mars" : "venus");
        this.appears = (Math.floor(Math.random() * 2) ? "male" : "female");
        this.age = Math.floor(Math.random() * 60);
        this.name = names[appears][Math.floor(Math.random() * 200)];
        this.race = races[Math.floor(Math.random() * races.length)];
    }

    render(o) {
        let gender = ["male", "andromorph", "female", "gynommorph"][Math.floor(Math.random() * 4)];
        let appears = (gender === "male" || gender === "andromorph" ? "male" : "female");
        let age = ["child", "teen", "adult", "elder"][Math.floor(Math.random() * 4)];
        let name = names[appears][Math.floor(Math.random() * 200)];
        let race = ["human", "fox", "dog", "cat"][Math.floor(Math.random() * 4)];
        let li = $("<li>"
            + "<span style='min-width: 40%'>" + name + "</span>"
            + "<span style='min-width: 20%'>" + age + "</span>"
            + "<span>" + race + "</span>"
            + "<span>"
            + "<i class='fa-solid fa-" + gender + " appears-" + appears + "'></i> "
            + "</span>"
            + "</li>"
        );
        $(o).append(li);

    }
}

class Place {
    name = "";
    tick = function() {};
    rooms = [];
    constructor() {}
    render() {}
}

class Room {
    name = "Guild";
    limit = -1; // unlimited
    tick = function(elapsedTicks) {};
    receive = function(event, ui) {};
    remove = function(event, ui) {};

    constructor() {}
    render() {}
}

class Game {
    paused = true;
    timeElapsed = 0;
    gold = 0;
    static races = {};
    static names = {};

    constructor() {
        $.ajax({
            url: "/game/races.json",
            success: function(data) {
                Game.races = data;
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
        $.ajax({
            url: "/game/names.json",
            success: function(data) {
                Game.names = data;
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }
}
console.log("test");