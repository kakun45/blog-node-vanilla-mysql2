// Some of the key features introduced in ES2020 include:
// 1. BigInt

// Using bigInt literals
const bigInt1 = 1234567890123456789012345678901234567890n;

// Using the BigInt constructor
const bigInt2 = BigInt("9007199254740991");

console.log(bigInt1); // Output: 1234567890123456789012345678901234567890n
console.log(bigInt2); // Output: 9007199254740991n

// To fix the TypeError, you need to convert the regular number to a BigInt before performing the operation. You can do this by using the BigInt() constructor or by appending an 'n' to the end of the number to create a BigInt literal.
const regularInt = 123;
const regularIntAsBigInt = BigInt(regularInt);

// Performing arithmetic operations
const sum = bigInt1 + bigInt2;
console.log(sum); // Output: 1234567890123456789012345678910244567881n

// The error message TypeError: Cannot mix BigInt and other types, use explicit conversions occurs when you try to perform an arithmetic operation that mixes a BigInt with another type, such as a regular number.

// 2. Dynamic Import is a feature in JavaScript that allows you to import modules dynamically, meaning that you can load a module only when it's needed, rather than at the beginning of the script. This can be useful for optimizing performance by reducing the initial load time of your application. Here's an example:

// Regular import (static import)
// import { add } from "./math.js";
// console.log(add(2, 3)); // Output: 5

// Dynamic import
//   "type": "module", line is the MUST in package.json
async function dynamicImportExample() {
  const { add } = await import("./utils/math.mjs"); // this won't work if: npm install math
  console.log(add(2, 3)); // Output: 5
}

dynamicImportExample();

// 3. The Nullish Coalescing Operator (??) is a relatively new addition to JavaScript that provides a concise way to handle default values for null or undefined values. It is particularly useful when you want to provide a default value for a variable only if the variable is null or undefined (and not for other falsy values like 0, '', false, or NaN).

// Here's how the Nullish Coalescing Operator works:

// If the expression on the left side of ?? evaluates to null or undefined, the operator returns the expression on the right side.
// If the expression on the left side is any other falsy value (0, '', false, NaN), the operator returns that value.

const value1 = null;
const value2 = 0;
const value3 = "";

const result1 = value1 ?? "default"; // 'default'
const result2 = value2 ?? "default"; // 0 (because 0 is not null or undefined)
const result3 = value3 ?? "default"; // '' (because '' is not null or undefined)

console.log(result1);
console.log(result2);
console.log(result3);

// 4. The Optional Chaining Operator (?.) is another new feature in JavaScript that allows you to safely access nested properties of an object without causing an error if a property is null or undefined. It short-circuits the evaluation, returning undefined instead of throwing an error if a property in the chain is null or undefined.

// Here's how the Optional Chaining Operator works:

// If the property exists and is not null or undefined, the expression evaluates to the value of that property.
// If the property does not exist or is null or undefined, the expression evaluates to undefined.
// Example:
const user = {
  name: "Jane Doe",
  address: {
    street: "123 1st Ave",
    city: "New York",
    zipCode: "10003",
  },
};

// Accessing nested properties without Optional Chaining
// This would throw an error if 'address' or 'zipCode' is null or undefined
// const zipCode = user.address.zipCode;

// Accessing nested properties with Optional Chaining
const zipCode = user.address?.zipCode;
console.log(zipCode); // Output: '10003'

// If any intermediate property is null or undefined, the result is also undefined
const country = user.address?.country;
console.log(country); // Output: undefined

//  5.a Promise.allSettled: A variation of Promise.all that waits for all promises to settle (either fulfill or reject), regardless of their individual outcomes.
//  Here, Promise.allSettled is used to handle multiple promises, some of which may resolve and some may reject. The results array contains objects representing the state of each promise (fulfilled or rejected) along with the value or reason for the state. The forEach loop is used to iterate over the results and log the status and value/reason of each promise.
const promises = [
  Promise.resolve("Resolved promise"),
  Promise.reject("Rejected promise"),
  Promise.resolve("Another resolved promise"),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status == "fulfilled") {
      console.log(`Fulfilled: ${result.value}`);
    } else if (result.status == "rejected") {
      console.log(`Rejected: ${result.reason}`);
    }
  });
});
// Output: Fulfilled: Resolved promise
// Rejected: Rejected promise
// Fulfilled: Another resolved promise

// 5.b In this example, promise1 is fulfilled with a value of 42, promise2 is rejected with an error message "Error", and promise3 is fulfilled with a value of "Hello from Promise3!" after a delay of 100 milliseconds. The Promise.allSettled method waits for all three promises to settle and then logs the outcome of each promise to the console.
const promise1 = Promise.resolve(42);
const promise2 = Promise.reject("Error");
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 120, "Hello from Promise3!")
);

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled:", result.value);
    } else if (result.status === "rejected") {
      console.log("Rejected:", result.reason);
    }
  });
});
// Output:
// Fulfilled: 42
// Rejected: Error
// Fulfilled: Hello from Promise3!
