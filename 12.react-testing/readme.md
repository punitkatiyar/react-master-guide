# Javascript and React Testing 

- Manual Testing

- Automatic Testing

## Testing By developer

- Unit Testing

- Integrated Testing

- E-2-E Testing

## react Testing Tool ( jest framework )

> npm install --save-dev jest

## Create A Sun Function

```
// sum.js

function sum(a, b) {
    return a + b;
}
module.exports = sum;

```

## Testing sum function using jest

```
// sum.test.js

import sum from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test the sun function', () => {
    let a=20;
    let b=20
expect(sum(a, b)).toBe(40);
});



```



