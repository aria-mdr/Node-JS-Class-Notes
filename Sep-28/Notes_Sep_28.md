# Creating a website for students and tutors matching

September 28, 2022

## Design mockup

Draw sketches of pages in your website, for example: https://speckyboy.com/web-mobile-wireframe-sketch-examples/

[Learn more about UI design here](https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/)

## Bring bootstrap into your project

- Bootstrap offers a wide range of ready-to-use HTML with CSS styles
- A page typically consists of a header(logo,title,etc.), a nav bar, a main content section, an sidebar(optional), and a footer

![web page layout](https://devpractical.com/public/2020/main-parts-of-webpage-layout.png)

Source: https://devpractical.com/public/2020/main-parts-of-webpage-layout.png

- Check out some Bootstrap template : [W3Schools](https://www.w3schools.com/bootstrap/bootstrap_templates.asp) and [Bootstrap offical website](https://getbootstrap.com/docs/5.2/examples/)
- HTML elements like`<header>, <nav>, <article>, <section>` are called semantic elements, [learn more here](https://www.w3schools.com/html/html5_semantic_elements.asp) and [here](https://learn.shayhowe.com/html-css/getting-to-know-html/#building-structure)

![HTML5 structural elements](https://softteco.com/media/Oct-Nov_News/HTML3.png)

Source: https://softteco.com/media/Oct-Nov_News/HTML3.png

### Layout

- Using Bootstrap's grid system: https://getbootstrap.com/docs/5.2/layout/grid/
- It uses flexbox under the hood, you can [learn more about it](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
- Bootstrap's grid is a 12-column system, see example here: https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp

### Spacing

- Spacing between elements is applied through padding and margin: https://getbootstrap.com/docs/5.2/utilities/spacing/
- To have a better understanding of how padding and margin works, you can [read more here](https://learn.shayhowe.com/html-css/opening-the-box-model/)

## Bring JS into your site

- Create HTML elements using JS: `document.createElement()`
- Set attributes on the elements:

  You can directly set the attributes on a element

  ```js
  const myInput = document.createElement("input");

  myInput.type = "text"; // set input type to 'text'
  myInput.id = "myInput"; // set id of input element
  ```

  Or use the following methods:

  ```js
  const elem = document.createElement("div");

  elem.hasAttribute(name); // checks for existence.
  elem.getAttribute(name); //gets the value.
  elem.setAttribute(name, value); //sets the value.
  elem.removeAttribute(name); // removes the attribute.
  ```

  For adding CSS classes to your element

  ```js
  const myElement = document.createElement("div");
  // the className attribute:a string variable representing the class or space-separated classes of the current element.

  myElement.className = "foo"; // our starting state: <div class="foo"></div>

  myElement.className = "class1 class2"; // will overwrite existing classes on the element
  // our ending state: <div class="class1 class2"></div>

  // or using the classList and its methods
  const div = document.createElement("div");
  div.className = "foo";

  // our starting state: <div class="foo"></div>
  console.log(div.outerHTML);

  // use the classList API to remove and add classes
  div.classList.remove("foo");
  div.classList.add("anotherclass");

  // <div class="anotherclass"></div>
  console.log(div.outerHTML);

  // if visible is set remove it, otherwise add it
  div.classList.toggle("visible");

  // add/remove visible, depending on test conditional, i less than 10
  div.classList.toggle("visible", i < 10);

  console.log(div.classList.contains("foo"));

  // add or remove multiple classes
  div.classList.add("foo", "bar", "baz");
  div.classList.remove("foo", "bar", "baz");

  // replace class "foo" with class "bar"
  div.classList.replace("foo", "bar");
  ```

- For an in-depth review of DOM manipulation, check out this [tutorial](https://javascript.info/document)
- Please note: sending too much JS to users's browser will have negative impact on the performance of your website
