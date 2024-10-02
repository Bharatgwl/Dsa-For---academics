const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the size of the array
rl.question('Enter the number of elements in the array: ', function(n) {
    var arr = [];
    var count = 0;

    console.log('Enter ' + n + ' elements:');

    // This function will keep asking for input until the array is full
    function getInput() {
        if (count < n) {
            rl.question('', function(input) {
                arr.push(input);  // Add the input to the array
                count++;
                getInput();  // Call the function again to get the next input
            });
        } else {
            console.log('The entered array is:', arr);
            rl.close();
        }
    }

    // Start taking the array input
    getInput();
});
