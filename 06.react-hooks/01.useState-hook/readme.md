# useState() hook 

**Allows you to add state to your functional components. The useState Hook returns an array with two elements: the current state value and a function to update the state.**

### Syntax of useState hook

```
  import React,{useState} from 'react'
  const [count,setCount]=useState(0)

useState(0)
    ↓
┌───────────────┐
│ Current Value │ → count
│ Update Value  │ → setCount
└───────────────┘
```

## useState with number, string, boolen, Array, Object.

```js
import { useState } from "react";

function Test() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Show / Hide
            </button>

            {isVisible && <p>Hello React!</p>}
        </div>
    );
}

export default Test
```

## Use cases : Boolen

- Show/hide password
- Modal
- Sidebar
- Dropdown
- Mobile menu
- Dark mode
- Loading indicator





### Example Like And Dislike And Reset Counter

> like

> dislike

> reset

> superLike   




### Spread Operator (...)

## useState with form 

### Example 1 

```javascript
const handelInput = (e) => {
  setUser(e.target.value)
}

<input
  value={user}
  onChange={handelInput}
/>
```



### Example 2 width object

```
<script>
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);
</script>
```

<hr>

```
<input
  type="text"
  placeholder='Enter First Name'
  onChange={e => setCard({
  ...card, firstName: e.target.value
  })}
/>
```


