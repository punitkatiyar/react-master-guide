# useReducer Hook

**The useReducer hook is used in React to manage complex state and state transitions in a more predictable and manageable way. It is an alternative to using the useState hook for managing state, particularly when the state logic becomes more intricate.**

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

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


