**The useReducer hook is used in React to manage complex state and state transitions in a more predictable and manageable way. It is an alternative to using the useState hook for managing state, particularly when the state logic becomes more intricate.**

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

```
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

```
