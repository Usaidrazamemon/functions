console.log("Anonymus Function / Expressional Funtions");
console.log("Example no#1");

let sums = function () {
    console.log("2*6=", 2 * 6);
    console.log("3-1=", 3 - 1);



}
sums()
console.log("Example no#2");
let maths = function (x, y, z) {
    console.log("x+z=", x + z);
    console.log("x-y=", x - y);
    console.log("z*y=", z * y);


}
maths(25, 15, 4)
console.log("Arrow Function");
console.log("Example no#1");
let hello = () => {
    console.log("sakina memon");

}
hello();
console.log("Example no#2");

let fullname = (first, last) => {
    console.log("fullname=", first + last);
    console.log("Hello" + " ", first + " " + last);

}
fullname("Usaid", "Raza");
console.log("Instant Function/ one time function ");
let multiple = function (e, f) {
    console.log(e * f);
    console.log(e - f);
    console.log(e * f);
    console.log(e % f);
    console.log(e = f);
}
multiple(55, 10)
console.log("hoisting");
function sakina(a, b) {
    return a + b;

}
let memon = sakina("my name is sakina  ", "I am a student of smit")
console.log(memon);
console.log("Funtion with if else conditions");

function ifyelsy(x,y) {
    if (x>y) {
        console.log("Rose is greater than lilly");
}
// else if (x==y) {
//      console.log("Rose is equal than lilly");
// }
// else if (x<y) {
//      console.log("Rose is less than lilly");
// }
else  {
     console.log("time is over");
}
 
}
ifyelsy(45,)



