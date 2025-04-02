# React Master Guide

## What Is React ?

**A JavaScript library for building user interfaces &#127942; it is declarative** 

- **Virtual DOM:** React uses a virtual representation of the DOM, which is more efficient than directly manipulating the actual DOM.

- **State management:** React provides a way to manage state with in components, which makes it easier to build complex UIs.

- **JSX:** React uses a syntax extension called JSX, which allows you to write HTML-like code within your JavaScript files.



## Setup React App On Local Machine 

> Install Node First https://nodejs.org/en/

## Basic of node and npm

- node : javascript runtime enviroment
- npm : node package manager

## node and npm command list and version

- node -v
- npm -v  
- npm install -g npm@latest 

## setup react app using vite (Next Generation Frontend Tooling)

```
npm create vite@latest : create template
cd tech-unit 
npm install  // install react package
npm run dev  // to run the code
```

## JSX 

**JSX (JavaScript XML) is a syntax extension used in React to describe the structure of user interface components in a more concise and intuitive way. It allows you to write HTML-like code directly in your JavaScript files, which is then transformed into JavaScript objects by the transpiler (such as Babel) before it's run by the browser.**

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






