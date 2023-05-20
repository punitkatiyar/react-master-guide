import React from 'react'
import { UserContext , UserChanel } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <UserChanel.Consumer>
                                {
                                    chanel => {
                                        return <div>User Context Value {user} Chanel { chanel}</div>
                                    }
                            }
                            </UserChanel.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
  )
}

export default ComponentF