# Lifecycle Methods 

## 1. Mounting :  when an instance of a component is being create and inserted into the DOM.

> constructor

> static getDerivedStateFromProps

> render

> componentDidMount

## 2.Updating when a component is being re-render as a result of change to either its prop or state.

> static getDerivedStateFromProps

> shouldComponentUpdate

> render

> getSnapshotBeforeUpdate

> comonentDidUpdate

## 3.Unmounting when a compnent being removed from the dom.

> componentWillUnmount

## 4.Error Handling when there is an error during rendering in a lifecycle method or in the constructor of any child component.

> static getDerivedStateFromError

> componentDidCatch
