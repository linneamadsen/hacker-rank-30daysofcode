process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    var i2;
    var d2;
    var s2;
    // Read and save an integer, double, and String to your variables.
    i2 = input_stdin_array[0];
    d2 = input_stdin_array[1];
    s2 = input_stdin_array[2];


    sum_i = Number(i) + Number(i2);
    console.log(sum_i);



    d2 = Number(d2);
    d = Number(d);
    sum_d = (d + d2);
    sum_d = sum_d.toFixed(1);
    console.log(sum_d)

    // console.log(d2toFixed + "d2toFixed");
    // sum_d = Number(d.toFixed(1)) + Number(d2);
    // Print the sum of both integer variables on a new line.

    // Print the sum of the double variables on a new line.
    // console.log(sum_d);
    // Concatenate and print the String variables on a new line
    console.log(s + s2);
    // The 's' variable above should be printed first.

}
