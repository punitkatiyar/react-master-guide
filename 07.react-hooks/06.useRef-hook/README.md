**The useRef hook in React is used to create a mutable reference that persists across component renders. It allows you to store a value that can be accessed and updated without causing a re-render of the component**

```
import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput
```
