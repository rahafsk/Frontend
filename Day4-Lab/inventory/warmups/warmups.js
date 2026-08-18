// ============================================================
// Day 4 Lab - Warmup Exercises
// Open warmups.html and check the browser console with F12.
// ============================================================


// ------------------------------------------------------------
// 2.1 - Variables & Dynamic Typing
// ------------------------------------------------------------

console.log("2.1 - Variables & Dynamic Typing");

// const is used because the name will not be reassigned.
const learnerName = "Rahaf";

// let is used because this variable will change.
let changingValue = 0;

console.log(`Name: ${learnerName}`);
console.log(
  `Starting value: ${changingValue}; type: ${typeof changingValue}`
);

// First reassignment: the value is still a number.
changingValue = 25;

console.log(
  `After number reassignment: ${changingValue}; type: ${typeof changingValue}`
);

// Second reassignment: the same variable now contains a string.
changingValue = "twenty-five";

console.log(
  `After string reassignment: ${changingValue}; type: ${typeof changingValue}`
);

// ------------------------------------------------------------
// 2.2 - Operators & Comparisons
// ------------------------------------------------------------

console.log("\n2.2 - Operators & Comparisons");

// This loose comparison is required by the exercise.
// It converts the string "10" into the number 10.
console.log(`"10" == 10 gives: ${"10" == 10}`);

// Strict equality checks both the value and its type.
console.log(`"10" === 10 gives: ${"10" === 10}`);

const searchText = "";

// An empty string is falsy.
// We do not explicitly compare searchText with anything.
if (!searchText) {
  console.log("The search text is empty, so the falsy branch runs.");
}