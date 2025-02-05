# React Master Guide

# What Is React ?

**A JavaScript library for building user interfaces &#127942; it is declarative** 





## Setup React App On Local Machine 

> Install Node First https://nodejs.org/en/

### About npm

- npm : node package manager
- npm command and version
- npm install -g npm@latest 

### setup app using npm vite

```
npm create vite@latest : create template
cd tech-unit 
npm install  // install react app
npm run dev  // to run the code
```
<hr>

## React Components  

React is built around the concept of components, which are self-contained UI elements that can be reused throughout your application.

> function Component

> class Component


- **Virtual DOM:** React uses a virtual representation of the DOM, which is more efficient than directly manipulating the actual DOM.

- **State management:** React provides a way to manage state with in components, which makes it easier to build complex UIs.

- **JSX:** React uses a syntax extension called JSX, which allows you to write HTML-like code within your JavaScript files.




- **JSX (JavaScript XML)** is a syntax extension used in React to describe the structure of user interface components in a more concise and intuitive way. It allows you to write HTML-like code directly in your JavaScript files, which is then transformed into JavaScript objects by the transpiler (such as Babel) before it's run by the browser.

```
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

**You can write the same thing using JSX like this:**

```
const element = <h1 className="greeting">Hello, world!</h1>;
```

- In this example, the JSX code is transformed into the same React.createElement call that we wrote before.

- JSX allows you to easily compose complex UI components using a familiar syntax. It also allows you to use JavaScript expressions within the markup, which enables dynamic and data-driven rendering of UI components.

- While JSX is not required to use React, it has become a widely adopted convention within the React community because of its many benefits






## module 1

1. Hello World
2. Introducing JSX
3. Rendering Elements
4. Components and Props
5. State and Lifecycle
6. Handling Events
7. Conditional Rendering
8. Lists and Keys
9. Forms
10. Lifting State Up
11. Composition vs Inheritance
12. Thinking In React

<a href="root.js">React Index File</a>

### Import export
```
"use strict";
ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Welcome to react App"), document.getElementById('root'));
```

# Short Code

> rfc

> rafc



> https://medium.com/@alimubashar74/react-native-what-is-the-difference-between-functional-and-class-components-25b4920c1686





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

