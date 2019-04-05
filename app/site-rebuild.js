var Pin = /** @class */ (function () {
    function Pin(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Pin.prototype.markDone = function () {
        this.done = true;
    };
    return Pin;
}());
var pins = [];
pins.push(new Pin('Really Cool DIY', 'Medium'));
pins.push(new Pin('Women\'s Fashion', 'Low'));
pins.push(new Pin('Out of Context D&D', 'High'));
console.log(pins);
pins[0].markDone();
for (var _i = 0, pins_1 = pins; _i < pins_1.length; _i++) {
    var pin = pins_1[_i];
    console.log(pin);
}
