'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
// change meal to two decimals below:
    meal_cost = meal_cost.toFixed(2);

// calculate total tip to two decimals below:
    var total_tip;
    total_tip = (meal_cost * tip_percent / 100).toFixed(2);
//    console.log(total_tip);

// calculate total tax to two decimals below:
    var total_tax;
    total_tax = (meal_cost * tax_percent / 100).toFixed(2);
//    console.log(total_tax);

// add meal_cost, total_tip and total_tax together below:
    var meal_total;
    meal_total = +total_tax + +meal_cost + +total_tip;
//   console.log(meal_total);

//create rounded meal total below:

    var rounded_meal_cost;
    rounded_meal_cost = Math.round(meal_total);
    console.log(rounded_meal_cost);


}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
