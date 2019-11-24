'use strict';

const randomArr10Items = [];
for (let i = 0;i<10;i++) {
    randomArr10Items.push(Math.floor(Math.random()*100));
}

const randomArr5Items = [];
for (let i = 0;i<5;i++) {
    randomArr5Items.push(Math.floor(Math.random()*100));
}


/*1*/

function resultArray1(arr1,arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return [...new Set([...arr1,...arr2])];
    }
    else {
        console.log("It is not an array");
    }
}

/*2*/

function resultArray2(arr1,arr2) {
    const result = [];
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        arr1.forEach( item1 => {
            arr2.forEach( item2 => {
                if (item1 === item2) {
                    result.push(item1);
                }
            });
        });
        return [...new Set(result)];
    }
    else {
        console.log("It is not an array");
    }
}

/*3*/

function resultArray3(arr1,arr2) {
    const result = [];
    const result2 = [];
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        const result = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.lastIndexOf(arr1[i])===-1) {
                result.push(arr1[i]);
            }
        }
        return result;
    }
    else {
        console.log("It is not an array");
    }
}


