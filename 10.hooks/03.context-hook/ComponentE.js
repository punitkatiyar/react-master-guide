import React, {useContext } from 'react'

import { UserContext,UserChanel } from '../App'
function ComponentE() {

    const user = useContext(UserContext)
    const chanel= useContext(UserChanel)



  return (
      <div>
          {user} { chanel}
      </div>
  )
}

export default ComponentE