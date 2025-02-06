# useContext() hook

**The useContext hook is used in React to consume values from a context provider. It allows functional components to access the data and functions provided by a context without the need for prop drilling.**

<img src="./componentTree.jpg" width="70%"/>

## 1. creacteContext()

```
export const UserContext = React.createContext()

<UserContext.Provider value={'Punit'}>
    <Acomp />
</UserContext.Provider>
```

## 2. useContext() 

```
import { UserContext} from '../App'

const user = useContext(UserContext)

{user}

```

## 3. another way to use

```
import { UserContext} from '../App'

 <UserContext.Consumer>
                {
                    user => {
                       return <div>User Context Value {user}</div>
                            }
                }
</UserContext.Consumer>
```




