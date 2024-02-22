# Blog posts with Node Express Vanilla SQL

This project utilizes ES2020 import/export throughout. I have added comments for explaining every line. Familiar import equivalents are commented out.

# ES2020

ES2020+ refers to the latest versions and features of the ECMAScript (ES) standard, which is the specification that JavaScript is based on. ES2020, also known as ECMAScript 2020 or ES11, was finalized in June 2020 and introduced several new features and improvements to the language.

Some of the key features introduced in ES2020 include:

- BigInt: A new primitive type for representing arbitrarily large integers.
- Dynamic Import: Allows modules to be imported asynchronously, which can improve performance and reduce initial load times.
- Nullish Coalescing Operator (??): Provides a way to handle default values for null or undefined values without using the logical OR operator.
- Optional Chaining Operator (?.): Allows you to safely access nested properties of an object without causing an error if a property is null or undefined.
- Promise.allSettled: A variation of Promise.all that waits for all promises to settle (either fulfill or reject), regardless of their individual outcomes.

# `ES2020.mjs` file

This file provides examples of bullet points. It is for educational purposes only and is not required for the app to run. To run it, use the following command from the project folder in a module fashion:

```
node es2020.mjs
```

# Functionality

This is a Blog posts' backend to save/fetch posts to/from a database. You would need to create a relational MySQL database. The endpoints are doing the job of:

- Create & save post to db
- Get all posts/only one post

  - Uses `mysql2` library to interact with the database.
  - Vanilla SQL dynamic queries V.S. of ORM to construct them.

### Using raw SQL in promises triggered on endpoints without an ORM (Object-Relational Mapping) can offer several advantages:

- The queries can become very complex
- It's beneficial to know how to use raw SQL
- Performance
- Flexibility
- Efficiency
- Database-specific features
- Migration scripts

## To test, use Postman:

- To create a new post with a JSON body in the following format:

```
{
	"title": "my 8th Title",
	"body": "my 8th body post"
}
```

Make a POST request to http://< host >/posts

- To get all posts, make a GET request to http://< host >/posts

- To get a post by ID, make a GET request to http://< host >/posts/< id >

## TODO:

- Implement a React front end.
  - Visualize the database.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
