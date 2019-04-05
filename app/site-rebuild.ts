class Pin {
  done: boolean = false;

  constructor(public description: string, public priority: string){}
}

var pins: Pin[] = [];
pins.push(new Pin('Really Cool DIY', 'Medium'));
pins.push(new Pin('Women\'s Fashion', 'Low'));
pins.push(new Pin('Out of Context D&D', 'High'));
console.log(pins);



think about project
