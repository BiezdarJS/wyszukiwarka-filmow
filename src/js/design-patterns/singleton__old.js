// class Settings {
//     constructor() {
//         this.settingsObject = {
//             'background': 'teal',
//             'version': Math.floor(Math.random() * 4000)
//         }
//         Object.freeze(this.settingsObject);
//     }

//     get(key) {
//         return this.settingsObject[key];
//     }

// }

// const s = new Settings();

// console.log(s.get('background'));



const mongoose = 'http://localhost:9000/';

class Database {
    static instance;
    static count = 0;

    constructor() {
        if (mongoose) {
            console.log("Connected to database");
        }
    }
    static getInstance() {
        if (this.instance) {
            console.log("Returning instance");
            return this.instance
        }
        console.log('Creating instance');

        this.instance = new Database();

        this.count = this.count + 1;
        return this.instance;

    }
}

const db = Database.getInstance();
const db2 = Database.getInstance();

db.getIns


var mySingleton = (function() {

    var instance;
    function init() {
        function privateMethod() {
            console.log("I am private")
        }
        var privateVariable = "I'm also private";
        var privateRandomNumber = Math.random();
        return {
            publicMethod: function() {
                console.log("The public can see me!");
            },
            publicProperty: "I am also public",
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }

})();


var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

singleA.publicMethod();

singleA.publicProperty;



