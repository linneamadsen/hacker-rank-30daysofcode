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



function main() {
    const N = parseInt(readLine(), 10);
// If  is odd, print Weird
//    If  is even and in the inclusive range of 2 to 5, print Not Weird
  // If  is even and in the inclusive range of 6 to 20, print Weird
//   If  is even and greater than 20, print Not Weird
    if (N % 2 != 0) {
        console.log("Weird");
    }
    if (N >= 2 && N <= 5 && N%2 == 0) {
        console.log("Not Weird");
    }
    if (N % 2 == 0 && N >= 6 && N <= 20) {
        console.log("Weird");
    }
    if (N > 20 && N % 2 == 0) {
        console.log("Not Weird");
    }


}
