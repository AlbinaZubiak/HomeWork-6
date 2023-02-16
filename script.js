//Задание 1 

let number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    if (number[i] === 10) {
        break;
    }
    console.log(arr[i]);
}


//Задание 2

let a = [1, 5, 4, 10, 0, 3];
console.log(a.indexOf(4));


//Задание 3

let figures = [1, 3, 5, 10, 20];
alert(figures.join(' '));
console.log(figures);


// Задание 4

let ab = [];
let ab2 = [];
for (let i = 0; i < 10; i++) {
    ab[i] = Math.round(Math.random() * 10);
    if (ab[i] % 2 === 0) {
        ab2.push(arr[i]);
    }
}
console.log(arr);
console.log(arr2);


//Задание 5

const nestedArr = [];

for (let i = 0; i < 3; i++) {
    nestedArr[i] - [];
    for (let j = 0; j < 3; j++) {
        nestedArr[i].push(i);
    }
}


//Задание 6

let arrPush = [1, 1, 1];

arr.push(2, 2, 2);

console.log(arr);


//Задание 7 

let arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort().pop()
alert(arrSort);


//Задание 8

let arrPrompt = [9, 8, 7, 6, 5];
let num = Number(prompt("Введите число от 1 до 10"));

if (arrPrompt.includes(num)) {
    console.log("Число находится в массиве");
} else {
    console.log("Число не находится в массиве");
}


//Задание 9

const abcdef = 'abcdef';
const reverseArr = abcdef.split('');

reverseArr.reverse();

console.log(reverseArr.join(''));


//Задание 10

const sixArr = new Array(6);
const randomArr = (arr) => {
    for (let i = 0, min = 1, max = 10; i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * (max - min)) + min;
    }
}
const averageArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
randomArr(sixArr);

console.log(sixArr);
console.log(averageArr(sixArr))


//Задание 11

let arrSeparation = [[1, 2, 3], [4, 5, 6]];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
    }
}

console.log(newArr);


//Задание 12

let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
        console.log(arr[i] + arr[0]);
    } else {
        console.log(arr[i] + arr[i + 1]);
    }
}