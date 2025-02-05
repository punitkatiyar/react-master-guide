import React from 'react'
import Bcomp from './Bcomp'
import Ccomp from './Ccomp'

function Acomp(props) {
    return (
        <>
            <h1>Acomp</h1>
            <Bcomp title={props.title} />
            <Ccomp />

        </>
    )
}

export default Acomp