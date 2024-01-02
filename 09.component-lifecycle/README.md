# Lifecycle Methods 

# 1. Mounting :  when an instance of a component is being create and inserted into the DOM.

## constructor

> A special function that will get called whenever a component is created

>  initializing state binding the event handling

- [ ] Do not cause side effects Ex. HTTP Requests

> super (props) Directly overwrite this.state

## static getDerivedStateFromProps

> When the state of the component depends on changes in prop over time

> set the state

- [ ] Do not cause side effects Ex. HTTP Requests

## render

> Only required Method

> Read props and state and return JSX

- [ ] Do not change state or intract with DOM or make ajax calls

> clildren component lifecycle methods are also executed

## componentDidMount

> invoked immediately after a component and all its children components have been rendered the DOM

> Cause side effects. Ex. Intract With the DOM or perform any ajax calls to load data.

<hr>

# 2.Updating when a component is being re-render as a result of change to either its prop or state.

## static getDerivedStateFromProps (props,state)

> When the state of the component depends on changes in prop over time

> set the state

 - [ ] Do not cause side effects Ex. HTTP Requests

## shouldComponentUpdate (nextProps , nextState)

> Dictates if the component should re-render or not 

> performance optimization

- [ ] Do not cause side effects Ex. HTTP Requests calling the setState method 
 
## render

## getSnapshotBeforeUpdate(PrevProps,prevState)

> called right before the changes form the virtual DOM are to be reflected in the DOM

> Capture some information from the DOM

> Method will either return null or return a value.

> Return value will be passed as the third parameter to the next method

## componentDidUpdate(prevProps , prevState , snapshot)

> called after the render is finished in the re-render cycle

> cause side iffects


# 3.Unmounting when a compnent being removed from the dom.

> componentWillUnmount

# 4.Error Handling when there is an error during rendering in a lifecycle method or in the constructor of any child component.

> static getDerivedStateFromError

> componentDidCatch
