function test() {
    console.log(this);
    this.myName = "Manoj";
}

test();
console.log(window.myName);

//Function Constructor
function Circle(radius) {
    this.radius = radius;
    // this.getArea = function() {
    //     return Math.PI * Math.pow(this.radius, 2);
    // };
    // Use prototyping as shown below outside
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle);

var otherCircle = new Circle(15);
console.log(otherCircle.getArea());
