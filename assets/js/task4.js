'use strict';

/*1*/

const fruitArr = ["apple","pear","apricot","plum","grapefruit","nectarine","kiwi"];
fruitArr.sort();

for (let i = 0; i < fruitArr.length; i++) {
    document.write("<li>" + fruitArr[i] + "</li>");
}

/*2*/
function fruitSearch(fruit) {
    for (let i = 0; i < fruitArr.length; i++) {
        if (fruitArr[i].toString().toLowerCase() === fruit.toString().toLowerCase()) {
            return i;
        }
    }
    return -1;
}