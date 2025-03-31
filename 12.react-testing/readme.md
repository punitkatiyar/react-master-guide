# Javascript and React Testing 

- Manual Testing

- Automatic Testing

## Testing By developer

- Unit Testing

- Integrated Testing

- E-2-E Testing

## react Testing Tool

- jest framework 

> npm install --save-dev jest

- @testing-library/jest-dom": "^5.15.1

- @testing-library/react": "^11.2.7

- @testing-library/user-event": "^12.8.3

## Create A Sun Function

```
// sum.js

function sum(a, b) {
    return a + b;
}
module.exports = sum;

```

## Create Test 

```
// sum.test.js

import sum from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    let a=20;
    let b=20
expect(sum(a, b)).toBe(40);
});



```



