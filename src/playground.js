/**
 *  Playground JS
 *  - a file for testing some
 *  javascript concepts
 */

/**
 *  JavaScript Objects, Properties and Methods
 *  Objects are key value pairs
 *
 */

const developer = {
  salary: 10000,
  experience: 4.5,
  techStack: ["Vue", "JavaScript", "Tailwind", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log("Initial Salary: ", developer.salary);
console.log(developer.doubleSalary());
console.log("Doubled Salary: ", developer.salary);
console.log("Looking for Work: ", developer.lookingForWork);

/**
 * Functions used for playground testing
 * - checking for playground.test-temp.js
 *
 * @param {int} number
 * @returns String
 */
export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

export const multiply = (num1, num2) => num1 * num2;

/**
 *  Map method on an array
 *  - offers us a really convenient way
 *    in a single line.
 *  - returns a new array of values
 */
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => {
  return num * num;
});

console.log(squares);

/**
 *  Dynamic Object Properties
 *  ES6 Syntax
 *
 *  Ojbects are key value pair
 *  and keys can be dynamic by
 *  using the square bracket
 */

const favoriteFood = "sushi";

const goodFoods = {
  [favoriteFood]: true,
};

console.log(goodFoods);
