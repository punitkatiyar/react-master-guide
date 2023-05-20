import React, { useState} from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value:Math.floor(Math.random() * 50 ) +1
        }])
    }
  return (
      <div>
          HookCounterFour
          <button onClick={addItem}>Add New Item</button>
          <ul>
              {
                  items.map(item => (<li key={item.id}>{item.value }</li>))
              }
          </ul>
      </div>
  )
}
export default HookCounterFour