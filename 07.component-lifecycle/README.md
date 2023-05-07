# Lifecycle Methods 

## 1. Mounting :  when an instance of a component is being create and inserted into the DOM.

> constructor

> static getDerivedStateFromProps

> render

> componentDidMount

- **Updating**  when a component is being re-render as a result of change to either its prop or state.

> static getDerivedStateFromProps

> shouldComponentUpdate

> render

> getSnapshotBeforeUpdate

> comonentDidUpdate

- **Unmounting** when a compnent being removed from the dom.

> componentWillUnmount

- **Error Handling** when there is an error during rendering in a lifecycle method or in the constructor of any child component.

> static getDerivedStateFromError

> componentDidCatch
