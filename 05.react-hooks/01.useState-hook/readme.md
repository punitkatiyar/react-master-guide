# useState() hook 

**Allows you to add state to your functional components. The useState Hook returns an array with two elements: the current state value and a function to update the state.**

### Syntax of useState hook

```
  import React,{useState} from 'react'
  const [count,setCount]=useState(0)
```
### Example Like And Dislike And Reset Counter

> like

> dislike

> reset

> superLike   




### Spread Operator (...)

## useState with form 

### Example 1 

```
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


