var Subject = function() {
    let observers = [];

    return {
        subscribeObserver: function(observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function(observer) {
            var index = observers.indexOf(observer);
            if(index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObserver: function(observer) {
            var index = observers.indexOf(observer);
            if(index > -1) {
                observers[index].notify(index);
            }
        },
        notifyAllObservers: function() {
            for(var i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            };
        }
    };
};

var Observer = function(number) {
    return {
        notify: function() {
            console.log("Observer " + number + " został poinformowany!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer(1);
var observer2 = new Observer(2);
var observer3 = new Observer(3);
var observer4 = new Observer(4);


subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer4);

// subject.notifyAllObservers();