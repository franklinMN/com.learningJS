const romanValue = [
    { arabic: 1 , roman: "I" },
    { arabic: 4 , roman: "IV" },
    { arabic: 5 , roman: "V" },
    { arabic: 9 , roman: "IX" },
    { arabic: 10 , roman: "X" },
    { arabic: 40 , roman: "XL" },
    { arabic: 50 , roman: "L" },
    { arabic: 90 , roman: "XC" },
    { arabic: 100 , roman: "C" },
    { arabic: 400 , roman: "CD" },
    { arabic: 500 , roman: "D" },
    { arabic: 900 , roman: "CM" },
    { arabic: 1000 , roman: "M" }
];

function convertToRoman(num) {
    let romanLetters = "";

    // Iterate through the romanValue array in reverse order
    for (let i = romanValue.length - 1; i >= 0; i--) {
        // While the number is greater than or equal to the current roman value
        while (num >= romanValue[i].arabic) {
            // Append the roman numeral to the result string
            romanLetters += romanValue[i].roman;
            // Subtract the arabic value from the number
            num -= romanValue[i].arabic;
        }
    }

    return romanLetters;
}

const result = convertToRoman(13051);
console.log(result); // Output: MMMXXXVI
