function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const num = 5; // Replace with the number for which you want to find the factorial
const result = factorialIterative(num);
console.log(`The factorial of ${num} is ${result}`);
