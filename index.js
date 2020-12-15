/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */

/*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length !== 10) this.stomach.push(food);
};

Person.prototype.poop = function () {
  if (this.stomach.length !== 0) this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

/*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  const maximumPossibleDistance = this.tank * this.milesPerGallon;
  const fuelRunOutDistance =
    distance > maximumPossibleDistance ? distance - maximumPossibleDistance : 0;
  if (fuelRunOutDistance) {
    this.odometer += maximumPossibleDistance;
    this.tank -= maximumPossibleDistance / this.milesPerGallon;
    return `I ran out of fuel at ${this.odometer} miles!`;
  } else {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  }
};

const maruti = new Car("maruti", 10);
maruti.fill(20);
console.log(maruti.drive(300));
maruti.fill(10);
console.log(maruti.drive(300));

/*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `Playing with ${this.favoriteToy}`;
  };
}

/* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Default Binding (In the global execution context , this refers to the global object 'window').
    2. Implicit Binding (Inside a function, the value of this depends on the calle).
    3. Explicit Binding (In this case, you can force a function call to use a particular object
       for this using functions such as call, apply and bind).
    4. New Binding (when we use new keyword, an empty object is created and referenced by this variable, inheriting the prototype of the function)
*/

///////// END OF CHALLENGE /////////
