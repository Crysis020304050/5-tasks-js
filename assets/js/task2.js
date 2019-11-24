'use strict';

const randomArr = [];
for (let i = 0;i<10;i++) {
    randomArr.push(Math.floor(Math.random()*100));
}

/*1*/

function toScreen(arr) {
    if (Array.isArray(arr)) {
        arr.forEach( item => console.log(item));
    }
    else {
        console.log("It is not an array");
    }
}

/*2*/

function toScreenEvenNumbers(arr) {
    if (Array.isArray(arr)) {
        arr.forEach( item => {
            if (item%2 === 0) {
                console.log(item)
            }
        });
    }
    else {
        console.log("It is not an array");
    }
}

/*3*/

function sumArrayItems(arr) {
    let result = 0;
    if (Array.isArray(arr)) {
        arr.forEach( item => {
            result+=Number(item);
        });
        return +result;
    }
    else {
        console.log("It is not an array");
    }
}

/*4*/

function maxArrayItems(arr) {
    let result = 0;
    if (Array.isArray(arr)) {
        arr.forEach( item => {
            if (Number(item)>result) {
                result = Number(item);
            }
        });
        return +result;
    }
    else {
        console.log("It is not an array");
    }
}

/*5*/

function addIndexItem(arr,i,item) {
    if (Array.isArray(arr)) {
        arr.splice(i, 0, item);
    }
    else {
        console.log("It is not an array");
    }
}

/*6*/

function removeIndexItem(arr,i) {
    if (Array.isArray(arr)) {
        arr.splice(i, 1);
    }
    else {
        console.log("It is not an array");
    }
}
