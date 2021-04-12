/* 1 task

 function sayHello(name) {
    if (name === "Mark") {
        return "Hi," + " " + name + "!";
    }
    else {
        return "Hello," + " " + name + "!";
    }
}
console.log (sayHello("Oleg"));
console.log (sayHello("Viktor"));
console.log (sayHello("Mark"));
*/

/*const sayHello=(name) => {
    if (name === "Mark") {
        return "Hi," + " " + name + "!";
    }
    else {
        return "Hello," + " " + name + "!";
    }
}
console.log (sayHello("Oleg"));
console.log (sayHello("Viktor"));
console.log (sayHello("Mark"));
*/




/* 2 task
function pythagorean(sideM, sideN) {
    return Math.sqrt(Math.pow (sideM, 2) + Math.pow (sideN, 2));
}
console.log (pythagorean (4, 3));

const pythagorean = (sideM, sideN) => {
    return Math.sqrt(Math.pow(sideM, 2) + Math.pow(sideN, 2));
}
console.log (pythagorean(4, 3)); */




/* 3 task

function min(a, b) {
    if (a >= b) {
        return b;
    }
    else {
        return a;
    }
}
console.log (min (2, 5));
console.log (min (3, -1));
console.log (min (1, 1));

const min = (a, b) => {
    if (a >= b) {
        return b;
    }
    else {
        return a;
    }
}
console.log (min (2, 5));
console.log (min (3, -1));
console.log (min (1, 1));
*/





/* 4 task 

function isEven (n) {
    if(!(n % 2)) {
        return "true";
}
    else {
        return "falce";
    }
} 
console.log (isEven(5));
console.log (isEven(4));

const isEven = (n) => {
    if(!(n % 2)) {
        return "true";
    }
    else {
        return "falce";
    }
}
console.log (isEven(5));
console.log (isEven(4));
console.log (isEven(95));
*/







/* task 5

function deleteChars(str) {
    const someString = str.slice(1, -1);
    return someString;
}
console.log(deleteChars("Hello"));
console.log(deleteChars("A"));

const deleteChars = (str) => {
    const someString = str.slice(1, -1);
    return someString;
}
console.log(deleteChars("Hello"));
console.log(deleteChars("A"));
*/







/* task 6 

function someFn(string) {
    return string.charAt(0).toUpperCase(1) + string.slice(1).toLowerCase(-1);
  }
console.log(someFn('пиТЕр'));

const someFn = (string) => {
    return string.charAt(0).toUpperCase(1) + string.slice(1).toLowerCase(-1);
}
console.log(someFn('пиТЕР'));
*/









/* task 7 


function someFn(numbers, strings) {
    const result = [...numbers.toString(), ...strings];
    return result;
}
console.log(someFn([1,2,3], ['1', '2', '3']));
*/








/* task 8 

function arrayFn(numbers1, numbers2) {
    const result = [...numbers1, ...numbers2];
    return result;
}
console.log(arrayFn([1,2,3], [4,5,6]));

const arrayFn = (numbers1, numbers2) => {
    const result = [...numbers1, ...numbers2];
    return result;
}
console.log(arrayFn([1,2,3], [4,5,6])); */






/* task 9 

function stringCutter(argument1, argument2) {
    for (let i=0; i < argument1.length; i++) {
        return argument1.substring(0, 6) + "...";
    }
}
console.log(stringCutter("Привет, мир!", 6));

const stringCutter = (argument1, argument2) => {
    for (let i=0; i < argument1.length; i++) {
        return argument1.substring(0, 6) + "...";
    }
}
console.log(stringCutter("Привет, мир!", 6)); 
*/



