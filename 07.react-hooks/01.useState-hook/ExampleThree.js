import React, { useState } from 'react'
function ExampleThree() {
    const [card, setCard] = useState({ firstName: "", lastName: "" });
    return (
        <div>
            <input
                type="text"
                placeholder='Enter First Name'
                onChange={e => setCard({
                    ...card, firstName: e.target.value
                })}
            />
            <input
                type="text"
                placeholder='Enter Last Name'
                onChange={e => setCard({
                    ...card, lastName: e.target.value
                })}
            />
            <h1>{card.firstName}</h1>
            <h1>{card.lastName}</h1>
        </div>
    )
}
export default ExampleThree