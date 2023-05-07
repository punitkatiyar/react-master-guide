# local Storage

```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;

```

# session Storage

```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function handleUsernameChange(event) {
    const newUsername = event.target.value;
    setUsername(newUsername);
    sessionStorage.setItem('username', newUsername);
  }

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
    </div>
  );
}

export default MyComponent;
``` 

# cookies

```
import React from 'react';
import Cookies from 'js-cookie';

function MyComponent() {
  function handleButtonClick() {
    Cookies.set('username', 'john_doe', { expires: 7 });
  }

  const username = Cookies.get('username');

  return (
    <div>
      <p>Username: {username}</p>
      <button onClick={handleButtonClick}>Set Cookie</button>
    </div>
  );
}

export default MyComponent;

```
