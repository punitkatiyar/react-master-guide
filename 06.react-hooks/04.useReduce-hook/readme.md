# useReducer Hook

**The useReducer hook is used in React to manage complex state and state transitions in a more predictable and manageable way. It is an alternative to using the useState hook for managing state, particularly when the state logic becomes more intricate.**

```
User Action
    ↓
 dispatch(action)
    ↓
 Reducer
    ↓
 New State
    ↓
 React Re-render
```

## Syntax

```javasctipt
const [state, dispatch] = useReducer(reducer, initialState);
```

1. state

Current state.

2. dispatch

Function used to send an action.

3. reducer

Function responsible for calculating the next state.



## Prerequisites

- JavaScript variables
- Functions
- Objects and arrays
- Destructuring
- Spread operator
- ES6 modules
- React components
- useState()
- Event handling
- Props

## Learning Objectives

- Understand why useReducer() exists
- Create reducers and actions
- Manage complex component state
- Handle multiple related state transitions
- Design reusable reducer logic
- Combine useReducer() with Context API
- Build scalable state management
- Understand dispatch and reducer execution
- Optimize reducer-based applications
- Understand important React internals related to reducer state updates 







## Example Simple State Action

```
import React, { useReducer } from 'react'
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}
function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
	    <div>
	      <div>Count = {count}</div>
	      <button onClick={() => dispatch('increment')}>Increment</button>
	      <button onClick={() => dispatch('decrement')}>Decrement</button>
	      <button onClick={() => dispatch('reset')}>Reset</button>
	    </div>
	)
}
export default CounterOne
```

<hr>

## array.Reduce() 

```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```



> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

