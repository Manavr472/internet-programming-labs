<?php
// Function to reverse a number
function reverseNumber($number) {
    // Convert the number to a string
    $numberStr = strval($number);

    // Reverse the string
    $reversedStr = strrev($numberStr);

    // Convert the reversed string back to a number
    $reversedNumber = intval($reversedStr);

    return $reversedNumber;
}

// Test the function with a number
$originalNumber = 12345;
$reversedNumber = reverseNumber($originalNumber);

echo "Original Number: $originalNumber<br>";
echo "Reversed Number: $reversedNumber";
?>
