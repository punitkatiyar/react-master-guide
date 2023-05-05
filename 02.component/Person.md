# Array Rander in Recat

```
import React from 'react'
function Person(props) {
    let sampleId = [101, 102, 103];
    let uName = ["Punit", "Tech Punit", "Ronit"];
    return (
    <>
        <h1>Person {props.demo} {sampleId[0]} {uName[0]}</h1>
        <h1>Person {props.demo} {sampleId[1]} {uName[1] }</h1>
        <h1>Person {props.demo} {sampleId[2]} {uName[2]}</h1>
    </>
  )
}
export default Person
```

<hr>

# Array With Map method

```
import React from 'react'
function Person(props) {
    let user = ["Punit", "Tech Punit", "Ronit"];
    return (
        <>
            {
                user.map(name => <h1>Welcome {name}</h1>)
            }
    </>
  )
}
export default Person
```
