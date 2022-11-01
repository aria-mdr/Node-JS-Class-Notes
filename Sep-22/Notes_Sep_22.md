# JavaScript

September 22, 2022

## Review of concepts taught in previous classes

- Function: passing parameter
- HTML external resources: Linking CSS stylesheet and JS script
- Camel case: a naming convention for variables; Camel case always starts out lowercase with each word delimited by a capital letter (like `personOne, textUtil, thingsToDo`)

## Object

JS object: It is used to store various keyed collections (group variables together) and more complex entities.

- Syntax of defining an object

```js
const objectName = {
	key1: value1,
	key2 : value2,
    …
    method1: function1,
    method2: function2,
}
```

Object constructor function: https://www.w3schools.com/JS/js_object_constructors.asp

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}
```

## DOM

Document Object Model in browser environment: You can interact with HTML elements using JS through DOM.

```js
    document.getElementById(<element #id>); // look up and return an element with the given Id

    HTMLelement.innerHTML = <Content to inject using JS>
    HTMLelement.setAttribute("attribute name", "new value")

```

Generating HTML dynamically using JS: https://javascript.info/modifying-document

```html
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);

  const element = document.getElementById("div1");
  element.appendChild(para);
</script>
```

Optional reading: [How to Create Dynamic HTML and CSS in JavaScript](https://www.webmound.com/create-dynamic-html-element-css-using-javascript/)

### Event-driven

Event listener: You can attach event listener to html element to subscribe to certain user activity, such as input from keyboard or mouse clicks

```html
<body>
  <label for="name">Name</label>
  <input id="name" name="name" type="text" />
</body>
```

```js
const input = document.getElementById("name");
// attach event listener function to selected element
input.onkeyup = (event) => console.log(event.target.value); // print value of input to console
// or you can use another method: addEventListener(type, listener)
input.addEventListener("keyup", (event) => console.log(event.target.value));
```

[A list of events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing): Read more about events on MDN

### Array

An ordered collection, where we have a 1st, a 2nd, a 3rd element and so on

- `[item1, item2, item3, …, itemN]` each array item has an index
- JS arrays are zero-indexed: the first item has an index of 0
-

Array method:

- `array.push(<new element>)`: add new element to the end of the array
- `array.pop()`: remove the last element of the array
