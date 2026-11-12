# React Hooks 

**React Hooks are a set of functions that allow you to use state and other React features in functional components. Prior to the introduction of Hooks in React 16.8, state management and lifecycle methods were only available in class components. With Hooks, you can now use these features in functional components as well, making them more powerful and flexible.**

Some of the most commonly used Hooks are:

- <a href="./">useState</a>
- useEffect
- useContext
- useReducer
- useCallback
- useMemo

## React Custom Hooks


**A Custom Hook is a JavaScript function that allows you to reuse stateful logic between multiple React components.**

## Important rules

- A custom hook name must start with use.
- Custom hooks can use other React hooks.
- Custom hooks help reuse logic between components.
- Custom hooks should be called at the top level of React components or other custom hooks.

## How to Create a Custom Hook

```js

import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;

```

### Use the custom hook in a component

```js

import useCounter from "./useCounter";

function App() {
  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;


```
