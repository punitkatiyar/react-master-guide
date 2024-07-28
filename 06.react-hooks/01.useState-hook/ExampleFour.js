import React, { useState } from 'react'
function FormOne() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [res, setRes] = useState('No res')
    const handelNum1 = (e) => {
        setNum1(Number(e.target.value))   
    }
    const handelNum2 = (e) => {
         setNum2(Number(e.target.value))
    }
    const addition = () => {
        const sum = num1 + num2
        setRes(sum)
    }
    const sub = () => {
        const sub = num1 - num2
        setRes(sub)
    }
    const multi = () => {
        const mul = num1 * num2
        setRes(mul)
    }
    const divi = () => {
        const div = num1 / num2
        setRes(div)
    }
  return (
      <div>
          <input type='number' value={num1 } onChange={handelNum1} />
          <input type='number' value={num2 } onChange={ handelNum2} />
          <button onClick={addition}>Add Data</button>
          <button onClick={sub}>Sub Data</button>
          <button onClick={multi}>Multi Data</button>
          <button onClick={divi}>Divi Data</button>
          <p>Result : { res }</p>
    </div>
  )
}

export default FormOne
