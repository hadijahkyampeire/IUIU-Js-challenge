var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 11; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
// you might change the limit to any number
