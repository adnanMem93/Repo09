// Only change code below this line

function myDoWhile() {

var myNumbers = "";

var i = 0;

while (i < 10) {

if (i === 9) {
    myNumbers += i; 
    } else {
    myNumbers += i + "," + " ";
}

i++;
}

return myNumbers;
}

myDoWhile();

console.log(myDoWhile());

// Only change code above this line

module.exports = myDoWhile;