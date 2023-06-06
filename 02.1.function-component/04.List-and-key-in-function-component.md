# List And Key In React

```
import React from 'react'
import Profile from './Profile';
function Person(props) {
    const persons = [
        {
            sid: 1,
            sname: 'Deep Singh',
            scourse: 'Full Stack Java'
        },
        {
            sid: 2,
            sname: 'Punit Katiyar',
            scourse: 'Full Stack PHP'
        },
        {
            sid: 3,
            sname: 'Gaurav Tomer',
            scourse: 'Full Stack Python'
        },
        {
            sid: 4,
            sname: 'Manoj Sir',
            scourse: 'Management'
        }
    ];
    const PersonList = persons.map(person => (<Profile key={person.sid} person={person}><button>Button</button></Profile>) )    
    return (
            <div>{PersonList }</div>    
  )
}
export default Person

```

## Profile Component 

```
 import React from 'react'
function Profile({ person ,key }) {
  return (
      <div>
          {<h1> {key }{person.sname} Course {person.scourse }</h1> }
      </div>
  )
}

export default Profile
```

<hr>

**`key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.**
