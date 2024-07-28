```
import React from 'react'
import image from './image/hello.gif';
function Article() {
    const posts = [1, "This is a Article Title"];
    return (
        <div className='post'>
            <div>
                {
                    posts[1]
                }
            </div>
            <img src="./image/hello.gif" width="100%" />
            <img src={image} width="100%" />
        </div>
    )
}
export default Article
```
