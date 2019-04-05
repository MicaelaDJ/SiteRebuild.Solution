var Pin = /** @class */ (function () {
    function Pin(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Pin;
}());
var pins = [];
pins.push(new Pin('Really Cool DIY', 'Medium'));
pins.push(new Pin('Women\'s Fashion', 'Low'));
pins.push(new Pin('Out of Context D&D', 'High'));
console.log(pins);
