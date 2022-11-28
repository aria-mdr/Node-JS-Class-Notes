# Database

Nov 16, 2022

## Type of database

A storage space for information and provides an interface for finding specific pieces of data

- Relational Database: table, data is store in a {field(column), record(row) } format; can have relationship between different tables
- Non-relational Database: document, data is store in object; A power feature of MongoDB is that you can have embedded object/document in your document

## Mongoose

[Mongoose docs](https://mongoosejs.com/docs/guide.html)

- Schema: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

  ```js
  const schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65 },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    decimal: Schema.Types.Decimal128,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    ofArrays: [[]],
    ofArrayOfNumbers: [[Number]],
    nested: {
      stuff: { type: String, lowercase: true, trim: true },
    },
    map: Map,
    mapOfString: {
      type: Map,
      of: String,
    },
  });
  ```

- Model: `Models` are fancy constructors compiled from `Schema` definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.

```js
const schema = new Schema({ _id: Number });
const Model = mongoose.model("Test", schema);

const doc = new Model();
await doc.save(); // Throws "document must have an _id before saving"

doc._id = 1;
await doc.save(); // works
```

### Example from the class

- `model.js`

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = Schema({
  name: String,
  user_id: String,
  teacher: {
    type: String,
    required: true,
    unique: true,
  },
  createdTime: {
    type: Date,
    default: new Date(),
  },
  hour: Number,
});

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;
```

https://mongoosejs.com/docs/api/model.html

- Creating a document from model: use `Model.create()` or `const document = new Model(); document.save()`
- Querying(finding documents): use model's `find`, `findById`, `findOne`, or `where` static methods.
- Deleting: `deleteOne()` and `deleteMany()` static methods on model

```js
const CourseModel = require("./model");

CourseModel.create({
  name: "NodeJs",
  teacher: "Aria",
});

CourseModel.find({});

CourseModel.find({
  teacher: "Aria",
});

CourseModel.findOne({
  teacher: "Aria",
});

// {
//     teacher: 'kate',
//     hour: 5,
//     name: 'nodeJS'
// }
// {
//     teacher: 'Aria',
//     hour: 10,
//     name: 'nodeJS'
// }
// {
//     teacher: 'Aria',
//     hour: 5,
//     name: 'nodeJS'
// }

// {
//     teacher: 'Aria',
//     hour: 5,
//     name: 'nodeJS'
// }
// matches if all checks match
CourseModel.findOne({
  teacher: "Aria",
  hour: 5,
});

// {
//     teacher: 'Aria',
//     hour: 5,
//     name: 'nodeJS'
// }
// {
//     teacher: 'kate',
//     hour: 5,
//     name: 'nodeJS'
// }
// {
//     teacher: 'Aria',
//     hour: 10,
//     name: 'nodeJS'
// }
CourseModel.findOne({
  $or: {
    teacher: "Aria",
    hour: 5,
  },
});

CourseModel.deleteOne({
  teacher: "Aria",
});

CourseModel.deleteMany({
  teacher: "Aria",
});

CourseModel.findOne({
  teacher: {
    $in: ["Aria", "Kate"],
  },
});

// {
//     teacher: 'kate',
//     hour: 5,
//     name: 'nodeJS'
// }

// {
//     teacher: 'kate',
//     hour: 10,
//     name: 'nodeJS'
// }
// update finds the document, changes only the field you specified
CourseModel.updateOne(
  {
    teacher: "kate",
  },
  { hour: 10 }
);

// {
//     hour: 10,
// }
/// replace finds the document, deletes it, then inserts the new one
CourseModel.replaceOne(
  {
    teacher: "kate",
  },
  { hour: 10 }
);

CourseModel.updateOne(
  {
    teacher: "Aria",
  },
  {
    hour: 5,
  }
);

CourseModel.insertMany([{}, {}, {}, {}]);
```

## Q&A

- Promise vs Promise.All vs Async/Await:

  - `Promise`: A `Promise` is a proxy for a value not necessarily known(pending) when the promise is created.

    ![promise_state](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

    ```js
    const promise = new Promise((resolve, reject) => {
      // do some stuff

      // check to see if thing went right
      if (true) {
        resolve("result");
      } else {
        reject("error msg to display");
      }
    });
    console.log(promise);
    // expected output: Promise { 'result' };
    ```

  - `Promise.All`:The Promise.all() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

  ```js
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
  // expected output: Array [3, 42, "foo"];
  ```

  - `Async/Await`: An `async` function can contain an `await` expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the `async` function's execution and returns the resolved value.

    A promise-based data fetching

    ```js
    function logFetch(url) {
      return fetch(url)
        .then((response) => response.text())
        .then((text) => {
          console.log(text);
        })
        .catch((err) => {
          console.error("fetch failed", err);
        });
    }
    ```

    An async/await version of that same call.

    ```js
    async function logFetch(url) {
      try {
        const response = await fetch(url);
        console.log(await response.text());
      } catch (err) {
        console.log("fetch failed", err);
      }
    }
    ```
