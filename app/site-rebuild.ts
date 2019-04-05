class Pin {
  done: boolean = false;

  constructor(public description: string, public priority: string){}

  markDone(){
    this.done = true;
  }
}

var pins: Pin[] = [];
pins.push(new Pin('Really Cool DIY', 'Medium'));
pins.push(new Pin('Women\'s Fashion', 'Low'));
pins.push(new Pin('Out of Context D&D', 'High'));
console.log(pins);

pins[0].markDone();

for(var pin of pins){
  console.log(pin);
}
