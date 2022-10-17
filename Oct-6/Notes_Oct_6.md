# Express

September 22, 2022

## Review of concepts taught in previous classes

- Http request: Header (meta info), Body(payload)
- NPM: Node package management

## Serving static assets

Using a built-in expreess middleware (https://expressjs.com/en/starter/static-files.html)

- For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

```js
app.use(express.static("public"));
```

- Files in the public folder are sent back when requested

```
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

- Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

## Middleware

Middleware is a piece of code (function) that is used to execute some code after the server gets a call from a client and before the controller action which will send a response.

[Learn more about middleware](https://www.turing.com/kb/building-middleware-for-node-js)

[Express Middleware](https://expressjs.com/en/guide/using-middleware.html)

```js
    document.getElementById(<element #id>); // look up and return an element with the given Id

    HTMLelement.innerHTML = <Content to inject using JS>
    HTMLelement.setAttribute("attribute name", "new value")

```

## Form manipulation with JS

(1) select the input element of you are targeting
(2) read from its “value” property
(3) attach event listener to subscribe to any info user write in the input field

Event handler will automatically get a parameter “event” passed in by the browser, which is an object representation of the html element that trigger the event.

## Fetch API

The Fetch API provides the fetch() method defined on a window object. This is used to perform requests. This method returns a Promise which can be further used to retrieve response of the request.

```js
 fetch(url) //call the fetch function passing the url of the API as a parameter
    .then(function(){
    //code for handling data from API
    });
    .catch(function(){
    //code when the server returns any error
});
```

- [Fetch API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Learn more about fetch](https://javascript.info/fetch-api)

### JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

[Learn more about JSON](https://www.json.org/json-en.html)

```js
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [
      "Catherine",
      "Thomas",
      "Trevor"
  ],
  "spouse": null
}
```

Rules for JSON syntax

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

### How localhost work

![Localhost](https://www.temok.com/blog/wp-content/uploads/2020/11/005.jpg)

[YouTube video: What is Localhost?](https://youtu.be/m98GX51T5dI)

## MongoDB

### Document

- MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.
- MongoDB documents are composed of field-and-value pairs and have the following structure:

```js
{
   field1: value1,
   field2: value2,
   field3: value3,
   ...
   fieldN: valueN
}
```

```js
{
    _id: ObjectId("5099803df3f4948bd2f98391"),
    name: { first: "Alan", last: "Turing" },
    birth: new Date('Jun 23, 1912'),
    death: new Date('Jun 07, 1954'),
    contribs: [ "Turing machine", "Turing test", "Turingery" ],
    views : NumberLong(1250000)
}
```

### Collections

MongoDB stores documents in collections. Collections are analogous to tables in relational databases.
![Collections in MongoDB](https://www.mongodb.com/docs/manual/images/crud-annotated-collection.bakedsvg.svg)
