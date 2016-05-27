/**
 * Created by Mosh Mage on 5/25/2016.
 */
var EXAMPLE;
var Eventer;

EXAMPLE = function () {
    this.name = "Example";
    this.author = "moshmage@gmail.com";
    this.description = "Example and simple implementation";
};

EXAMPLE.prototype.initialize = function (EventerService) {
    Eventer = EventerService;
    Eventer.catchEvent('join','#mmdev', function () {
        Eventer.client.say('#mmdev', 'Hello, world.');
    });
};

EXAMPLE.prototype.rehasher = function () {
    Eventer.releaseEvent('join','#mmdev');
    console.log(this.name,'was rehashed');
};

module.exports = EXAMPLE;