function add7(number){
    return number + 7;
}

console.log("4+7=",add7(4))


//
function multiply(number){
    return a*b;
}

console.log("7✖️7=",multiply(7*7))
// miss

function multiply(a,b){
    return a * b;
}

console.log("7X7=", multiply(7,7));
// correct



//Practice
console.log("Hello".toUpperCase()); // 出力: "HELLO"
//Practice
const str = "hello world";
console.log(str.substring(6)); // 出力: "world"
//Practice
console.log(str.charAt(1)); // 出力: "e"
//Practice
console.log("Hello".toLowerCase()); // 出力: "hello"
//Practice
function cross(c, s) {
    // Return
    return c - s;
}
const Chrono = cross(7,5); 
console.log(Chrono); // 出力: 2


//Assignment
function capitalize(FirstC){
    return FirstC.charAt(0).toUpperCase()+substring(1).toLowerCase;
}

//miss⇨functionとparameters→ const FirstC = 
const capitalize = FirstC("Ryoma Ryoma");
console.log(FirstC);

//revise
//Assignment
function capitalize(FirstC){
    return FirstC.charAt(0).toUpperCase()+substring(1).toLowerCase();
}

const capitalizeC = FirstC("RyomaRyoma");
console.log(FirstC);

//revise
//revise
//Assignment
function capitalize(FirstC){
    return FirstC.charAt(0).toUpperCase()+FirstC.substring(1).toLowerCase();
}

const capitalizeC = capitalize("RyomaRyoma");
console.log(capitalize);

//revise
//revise
//Assignment
function capitalize(FirstC){
    return FirstC.charAt(0).toUpperCase()+FirstC.substring(1).toLowerCase();
}

const capitalizeC = capitalize("RyomaRyoma");
console.log(capitalizeC);




