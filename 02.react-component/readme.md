# What Is Component .

**A component is a reusable piece of UI that can be composed together to create complex user interfaces. Components can be thought of as custom HTML elements that are defined by JavaScript code.**

## {props.children}

<!-- <img src="component.webp"> -->

## React components can be of two types :

- function Component

- class Component

<hr>

## React Function Component [ rfce ]

```
import React from 'react'
function Hello() {
  return (
    <div>Hello</div>
  )
}

export default Hello

```
## React Arrow Function Conponent [ rafc ] [ rafce ]

```
import React from 'react'

const Hello = () => {
  return (
    <div>Hello</div>
  )
}

export default Hello
```

## React Class Component [ rcc ] [ rce ]

```
import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}


```
