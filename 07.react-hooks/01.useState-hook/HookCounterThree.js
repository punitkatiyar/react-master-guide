import React, { useState } from 'react'

function HookCounterThree() {
    // useState Using Object Example
    const [uname, setName] = useState({ firstName: '', lastName: '' })
  return (
      <div>
          HookCounterThree
          <form>
              <input
                  type="text"
                  value={uname.firstName}
                  onChange={ e => setName({
                      ...uname ,firstName: e.target.value
                  })}
              />
              <input
                  type="text"
                  value={uname.lastName}
                  onChange={ e => setName({
                      ...uname ,lastName: e.target.value
                  })}
              />
              <h1>First Name : {uname.firstName}</h1>
              <h1>Last Name : {uname.lastName}</h1>
              <h3>{ JSON.stringify(uname) }</h3>
          </form>
      </div>
  )
}

export default HookCounterThree