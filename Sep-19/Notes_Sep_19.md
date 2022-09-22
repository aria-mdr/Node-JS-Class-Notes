# JavaScript

September 19, 2022

## Review of concepts taught in previous classes

- JS can do type conversion in the background, i.e., `12 + "34" = "1234"` (number 12 is automatically converted into string and then joined together with string “34”)
- Comparison operator: using triple equals (===) to tell JS not to do any type conversion
- Block of code: a group of commands, usually contained within a pair of curly braces
  `{ Your code here … }`
- Logical operator: And (&&) operator, OR (||) operator

## Conditional Statement

```js
if (conditional statement) {
    // this block of code will be executed if true
}
    else {
        // this block of code will be executed if false
}
```

And if statement can be chained together:

```js
if (conditional statement 1) {
    // this block of code will be executed if conditional statement 1 is true
}
    else if (conditional statement2) {
        // this block of code will be executed if conditional statement2 is true
}
    else {
        // if all previous conditional statement are false
}
```

## Loop statement

while loop:

```js
    while (conditional statement) {
	// code block will execute over and over while conditional statement remains true
 }
```

do while loop:

```js
    do {
	// code block
 } while (conditional statement)
```

for loop:

```js
    for (initialization condition; testing condition; increment/decrement)
{
    // Your statement(s)
}
```

Flow Chart of JS loops: https://www.geeksforgeeks.org/loops-in-javascript/

### Date type

[JS built-in Date type](https://www.w3schools.com/js/js_dates.asp): `const now = new Date()` gives you a object representing the a Date (i.e. "Sept, 19, 2022")

### Function

Function: A JavaScript function is a block of code designed to perform a particular task. And you can store logic in function and reuse them when you call (run) the function anywhere you like.

For more info on functions: https://javascript.info/function-basics
