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

// ------------------------------------------------------------
// 2.3 - Control Flow
// ------------------------------------------------------------

console.log("\n2.3 - Control Flow");

const grades = [85, 92, 58, 73, 40];

// for...of gives us each grade value from the array.
for (const grade of grades) {
  if (grade >= 60) {
    console.log(`${grade}: Pass`);
  } else {
    console.log(`${grade}: Fail`);
  }
}

const hardcodedScore = 85;
let letterGrade;

// switch(true) selects the first condition that evaluates to true.
switch (true) {
  case hardcodedScore >= 90:
    letterGrade = "A";
    break;

    case hardcodedScore >= 80:
    letterGrade = "B";
    break;

    case hardcodedScore >= 60:
    letterGrade = "C";
    break;

    default:
    letterGrade = "F";
}

console.log(`${hardcodedScore} receives letter grade ${letterGrade}.`);


// ------------------------------------------------------------
// 2.4 - Functions, All Four Ways
// ------------------------------------------------------------

console.log("\n2.4 - Functions, All Four Ways");

// 1. Function declaration
function isEvenDeclaration(number) {
  return number % 2 === 0;
}

// 2. Function expression
const isEvenExpression = function (number) {
  return number % 2 === 0;
};

// 3. Arrow function
const isEvenArrow = (number) => number % 2 === 0;

const testNumber = 8;

console.log(
  `Declaration: ${testNumber} is even -> ${isEvenDeclaration(testNumber)}`
);

console.log(
  `Expression: ${testNumber} is even -> ${isEvenExpression(testNumber)}`
);

console.log(
  `Arrow: ${testNumber} is even -> ${isEvenArrow(testNumber)}`
);

// 4. Function with a default parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(`Default parameter: ${greet()}`);
console.log(`Default parameter with a name: ${greet("Rahaf")}`);

// 5. Function with a rest parameter
function sumAll(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(
  `Rest parameter: sumAll(1, 2, 3, 4) -> ${sumAll(1, 2, 3, 4)}`
);

// ------------------------------------------------------------
// 2.5 - The this Keyword
// ------------------------------------------------------------

console.log("\n2.5 - The this Keyword");

const surroundingContext = {
  name: "Surrounding context"
};


function createLearnerProfile() {
  return {
    name: "Rahaf",

    // A regular function receives this from the calling object.
    getNameRegular: function () {
      return this.name;
    },

    // An arrow function keeps this from its surrounding scope.
    getNameArrow: () => this.name
  }
  
}

// call() gives createLearnerProfile a known surrounding this value.
const learnerProfile =
  createLearnerProfile.call(surroundingContext);

console.log(
    `Regular method: ${learnerProfile.getNameRegular()}`
);



