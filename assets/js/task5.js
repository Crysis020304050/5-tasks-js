'use strict';

/*1*/
function compareStringsLength(str1,str2) {
    if (str1.length > str2.length) {
        return 1;
    }
    else if (str1.length === str2.length) {
        return 0;
    }
    else {
        return -1;
    }
}

/*2*/

function upperCaseFirstChar(str) {
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

/*3*/

const vowels = s => s.split("").filter(c => "аоиеёэыуюя".includes(c)).length;

/*4*/

function spam(str) {
    if (str.toLowerCase().includes("100% бесплатно")) {
        return false;
    }
    else if (str.toLowerCase().includes("увеличение продаж")) {
        return false;
    }
    else if (str.toLowerCase().includes("только сегодня")) {
        return false;
    }
    else if (str.toLowerCase().includes("не удаляйте")) {
        return false;
    }
    else if (str.toLowerCase().includes("ххх")) {
        return false;
    }
    return true;
}

/*5*/

function truncate(str,strLength) {
    if (str.length < strLength) {
        return str;
    }
    else {
        const arrStr = str.split("");
        arrStr.length = strLength;
        arrStr[arrStr.length-1] = ".";
        arrStr[arrStr.length-2] = ".";
        arrStr[arrStr.length-3] = ".";
        return arrStr.join("");
    }
}

/*6*/

function polindrom(str) {
    return str.toString().toLowerCase() === str.toString().toLowerCase().split("").reverse().join("");
}

/*7*/

function countWords(str) {
    return str.split(" ").length;
}

/*8*/

function biggestWord(str) {
    const arr = str.split(" ");
    let lengthOfWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lengthOfWord) {
            lengthOfWord = arr[i].length;
        }
    }
    return lengthOfWord;
}

/*9*/

function averageLength(str) {
    const arr = str.split(" ");
    let sumLengthOfWords = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLengthOfWords+=arr[i].length;
    }
    return sumLengthOfWords/arr.length;
}

/*10*/

function charCount(str,char) {
    const arr = str.split("");
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (char === arr[i]) {
            console.log(i);
            counter++;
        }
    }
    return console.log(`Char occurs ${counter} times`);
}
